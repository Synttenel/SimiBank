import { useState, useEffect } from "react";

import Canvas from "./Canvas";
import type { GameState } from "./gamestate";

interface Props{
    gameState: GameState,
    day: number,
}

function Slider({ gameState, day }: Props){

  const [test,setTest] = useState(0);

  useEffect(() => {
    const sliderComponent = document.getElementById("sliderComponent");
    const sliderProgress = document.getElementById("sliderProgress");

    if(sliderComponent && sliderProgress){
        

        console.log(sliderComponent.scrollLeft);
        console.log(sliderComponent.children)

        console.log(sliderProgress?.children)
            

        for(let i = 0; i < sliderProgress.children.length; i++){

        }
        
        
    }
  },[test])

  return(
    <>
      
      <div className="relative  w-[90%]  ">
      <div className="  rounded-2xl relative  grid  grid-flow-col overflow-x-auto snap-x snap-mandatory gap-10 auto-cols-[100%]"
      id="sliderComponent"
      onPointerOver={() => setTest(prev => prev + 1)}>
        <Canvas gameState={gameState} day={day} />
        <div className="flex flex-col gap-10 justify-top items-start bg-card-medium p-5 w-full h-full rounded-2xl min-sm: shadow-2xs snap-center shrink-0">
            <h1 className="font-bold text-2xl">Conta</h1>
            <h1 className="font-bold text-2xl">R$88</h1>
            
        </div>
        <div className="flex flex-col gap-10 justify-top items-start bg-card-medium p-5 w-full h-full rounded-2xl min-sm: shadow-2xs snap-center shrink-0">
            <h1 className="font-bold text-2xl">Conta</h1>
            <h1 className="font-bold text-2xl">R$88</h1>
            
        </div>
        
      </div>
      <div className="absolute bg-black/70 backdrop:blur-2xl w-20 h-5 left-1/2 bottom-0 -translate-x-1/2 rounded-4xl flex justify-center items-center p-2 gap-3"
      id="sliderProgress">
        <div className="rounded-full bg-white h-2 w-2"></div>
        <div className="rounded-full bg-white h-2 w-2"></div>
        <div className="rounded-full bg-white h-2 w-2"></div>
      </div>
      </div>
    </>
  )
}

export default Slider;