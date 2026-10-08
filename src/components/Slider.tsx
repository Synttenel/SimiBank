import { useState, useEffect } from "react";

import Canvas from "./Canvas";
import Inside from "./Inside";
import type { GameState } from "./gamestate";

interface Props{
    gameState: GameState,
    day: number,
}

function Slider({ gameState, day }: Props){


  return(
    <>
      
      <div className="relative w-5/6">
      <div className=" rounded-2xl grid  grid-flow-col snap-x snap-mandatory gap-10 auto-cols-[100%] overflow-x-scroll">
        <Canvas gameState={gameState} day={day} />
        <Inside />
        <div className="absolute bg-red-600 w-20 h-30 left-10 top-1/2 -translate-1/2 rounded-2xl"></div>
        <div className="absolute bg-red-600 w-20 h-30 right-0 top-1/2 -translate-y-1/2 rounded-2xl"></div>
      </div>
      </div>
    </>
  )
}

export default Slider;