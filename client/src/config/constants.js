import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

 const EditorTabs = [
  {
    name: "colorPicker",
    icon: swatch,
  },
  {
    name: "filePicker",
    icon: fileIcon,
  },
  {
    name: "aiPicker",
    icon: ai,
  },
];
 const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

 const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

export {
  EditorTabs, 
  FilterTabs, 
  DecalTypes
};
