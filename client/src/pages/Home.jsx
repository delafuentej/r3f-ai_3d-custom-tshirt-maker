import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config";
import state from "../store";
// components
import { CustomButton } from "../components";

console.log("state", state);

const Home = () => {
  const snap = useSnapshot(state);
  //console.log('snap', snap.intro);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          {/*home header */}
          <motion.header {...slideAnimation("down")}>
            <img
              src={snap.logoDecal}
              alt="logo"
              className="w-20 h-20 object-contain"
            />
          </motion.header>
          {/* home head content */}
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> GO.
              </h1>
            </motion.div>

            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <div className="bg-black/40 p-4 rounded-md">
                <p className="max-w-md  text-white font-bold text-base">
                  Create your unique and exclusive Web-Dev T-Shirt with our
                  brand-new 3D customization tool.
                </p>
                <p className="max-w-md font-bold text-white text-base">
                  <strong>Let your imagination run wild</strong> and define your
                  own style.
                </p>
              </div>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)} //???snap.intro = false
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
