import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48', //default color
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logos/threejs.png',
    fullDecal: './logos/threejs.png',
});

export default state;