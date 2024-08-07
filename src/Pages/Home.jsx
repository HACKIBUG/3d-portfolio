import {useState,Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../Models/island';
import {Bird} from '../Models/Bird';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating,setIsRotating]=useState(false);
  const [currentStage,setCurrentStage]=useState(1);
  const adjustIslandForSceenSize=()=>{
    let screenScale=null;

    let screenPosition=[-2.5,-15.9,-49];
    let rotation=[0,0,0]
    
    if(window.innerWidth<768){
      screenScale=[0.9, 0.9, 0.9];
      
      }else {
        screenScale=[1,1,1];
        
      }
  return [screenScale,screenPosition,rotation];
}
const adjustPlaneForSceenSize=()=>{
  let screenScale,screenPosition;
  
  if(window.innerWidth<768){
    screenScale=[1,1,1];
    screenPosition=[0,-1.5,0];
    }else {
      screenScale=[3,3,3];
      screenPosition=[0,-4,-4]
    }
return [screenScale,screenPosition];
}
  const [islandScale,islandPosition,islandRotation]=adjustIslandForSceenSize();
  const [ planeScale,planePosition ]=adjustPlaneForSceenSize();
  return (
      <section className="w-full h-screen relative">
          <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage &&  <HomeInfo currentStage={currentStage}></HomeInfo >}
          </div> 
        <Canvas 
        className={`w-full h-screen bg-gradient-to-r from-slate-600 via-pink-300 to-purple-500 ${isRotating ? 'cursor-grabbing':'cursor-grab'}`} 
        camera={{near:0.1,far:1000}} 
        >
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1eff" groundColor="#000000" intensity={1}/>

        <Bird />
        {/* <Sky isRotating={isRotating} />    */}
        <Island setIsRotating={setIsRotating}
          isRotating={isRotating}
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          setCurrentStage={setCurrentStage}>
          
        </Island>
        </Suspense>
        </Canvas>
      </section>
  );
}

export default Home
