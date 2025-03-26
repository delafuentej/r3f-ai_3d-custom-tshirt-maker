import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import {easing} from 'maath';
import { useSnapshot } from 'valtio';
import state from '../../store';

const Shirt = () => {
  const snap = useSnapshot(state);

  //load t-shirt model
  const {nodes, materials} = useGLTF('/shirt_baked.glb');
  // console.log('nodes', nodes);
 // console.log('materials', materials)
  if (!nodes || !materials) {
    console.warn('The model has not been loaded correctly.');
    return null;
  }
  //load texture
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // color material:
  const materialColor = materials.lambert1.color;
  //console.log('materialColor', materialColor)

  if (logoTexture) {
    logoTexture.anisotropy = 16;
  };
 // console.log(logoTexture.anisotropy)

  // applying the color smoothly
useFrame((state, delta) => easing.dampC(
  materialColor,
  snap.color,
  0.3,
  delta
));
  
// key in group => react will change the model when the state changes:
  const stateString = JSON.stringify(snap);

  console.log('stateString', stateString);
  
  return (
    <group
      key={stateString}
    >
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
         material={materials.lambert1}
         material-roughness={1}
         dispose={null}
      >
        {/*  */}
        {snap.isFullTexture && fullTexture && (
          <Decal
           // key='fullTexture' 
            position={[0,0,0]}
            rotation={[0,0,0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {/* to place the logo on the T-shirt */}
        {snap.isLogoTexture && logoTexture && (
          <Decal 
          //  key='logoTexture'
            position={[0,0.04,0.15]}
            rotation={[0,0,0]}
            scale={0.15}
            map={logoTexture}
           //map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt;