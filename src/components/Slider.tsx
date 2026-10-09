import { useState, useEffect } from "react";

import Canvas from "./Canvas";
import Inside from "./Inside";
import type { GameState } from "./gamestate";

interface Props{
    gameState: GameState,
    day: number,
}

function Slider({ gameState, day }: Props){
  
  if(document.getElementById("slider")){
    const slider = document.getElementById("slider");

  }
  const handleScroll = (orientation: String) => {
    
    console.log("orientation:", orientation)
    if(orientation === "left"){
      slider?.scrollBy(-300,0);
    }
    else if(orientation === "right"){
      slider?.scrollBy(300,0);
    }

  }


  return(
    <>
      
      <div className="relative w-5/6">
      <div className=" rounded-2xl grid  grid-flow-col snap-x snap-mandatory gap-10 auto-cols-[100%] overflow-hidden"
      id="slider">
        <Canvas gameState={gameState} day={day} />
        <Inside />
        <img className="absolute w-20 h-30 left-10 top-1/2 -translate-1/2 rounded-2xl"
        src="https://img.icons8.com/?size=100&id=1806&format=png&color=ffffff"
        onClick={() => handleScroll("left")}/>
        <img className="absolute w-20 h-30 right-0 top-1/2 -translate-y-1/2 rounded-2xl backdrop:blur-3xl"
        src="https://img.icons8.com/?size=100&id=61&format=png&color=ffffff"
        onClick={() => handleScroll("right")}/>
      </div>
      </div>
    </>
  )
}

export default Slider;