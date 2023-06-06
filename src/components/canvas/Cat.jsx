import {Suspense,useEffect,useState} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Cat = ({isMobile}) => {
  const cat = useGLTF('./munchkin_cat/scene.gltf');
  return (
    <mesh>
      <hemisphereLight 
      intensity={0.15} 
      groundColor='white'/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={cat.scene}
        scale={isMobile ? 8 : 10}
        position={isMobile ? [0,-3,0] : [0,-3.25,0]}
        rotation={[-0.17,0.5,-0.01]}
      />
    </mesh>
  )
}
const CatCanvas = () =>{
  const [isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  },[])
  return (
    <Canvas
    frameloop='demand'
    shadows
    dpr={[1, 2]}
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Cat isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};
export default CatCanvas