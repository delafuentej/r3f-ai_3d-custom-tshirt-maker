import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
//state
import state from "../store";
//config folder:
import {
  //config
  config,
  // constants
  EditorTabs,
  FilterTabs,
  DecalTypes,
  // helpers
  downloadCanvasToImage,
  reader,
  // motion -animations
  slideAnimation,
  fadeAnimation,
} from "../config";

//components
import {
  CustomButton,
  Tab,
  AIPicker,
  ColorPicker,
  FilePicker,
} from "../components";
//images-assets
import { download } from "../assets";

console.log("FilterTabs", FilterTabs);

const { backendUrl } = config.development;

//console.log('config',config)

const Customizer = () => {
  //states

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const snap = useSnapshot(state);

  //Showing tab content depending on the active tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorPicker":
        return <ColorPicker />;

      case "filePicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;

      case "aiPicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        );

      default:
        return null;
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      // call the backend to generate an ai image/text
      setGeneratingImg(true);
      const resp = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });
      const data = await resp.json();
      console.log("data", data);

      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      console.log(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
      setPrompt("");
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }
    // after setting the state, we have to update the activeFilterTab
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };
  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* Editor Tabs */}
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          {/* button go back to home */}
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                className="w-10 h-10 scale-125 transition-transform duration-300  hover:scale-140 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
            <button className="download-btn" onClick={downloadCanvasToImage}>
              <img
                src={download}
                alt="download_image"
                className="w-10 h-10 object-contain transition-transform duration-300  hover:scale-140"
              />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
