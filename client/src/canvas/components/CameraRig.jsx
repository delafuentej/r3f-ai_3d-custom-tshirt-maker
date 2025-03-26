import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../../store";

console.log('state', state);

const CameraRig = ({children}) => {
  //state
  const snap = useSnapshot(state);
//refs
  const group = useRef();

  useFrame((state, delta)=> {
    //breakpoits
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // setting initial position of model
    let targetPosition = [-0.4, 0, 2];
    
    if(snap.intro){
      if(isBreakpoint) targetPosition = [0, 0, 2];
      if(isMobile) targetPosition =[0, 0.2, 2.5];
    }else{
      if(isMobile) targetPosition =[0, 0.2, 2.5];
      else targetPosition = [0, 0, 2];
    };

    // setting model camera position
    easing.damp3(
      state.camera.position, // current position
      targetPosition, // target position
      0.3, // smoothTime
      delta, //delta
    );

    // setting the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 2.5, -state.pointer.x / 2.5,   Math.sin(state.pointer.x * 1.5) * 0.1],
      // [state.pointer.y / 5 , - state.pointer.x /10, 0], //[x axis, y axis, z axis]
      // [state.pointer.y / 2.5, -state.pointer.x / 6,   Math.sin(state.pointer.x * 0.5) * 0.05],
      0.3, //smoothTime
      delta
    )
  });

  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig;