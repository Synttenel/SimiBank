import { useState, useEffect} from "react";

import type { GameState } from "./gamestate";

import canvasBgRainy from "./images/canvasBgRainy.png"
import canvasBgNormal from "./images/canvasBgNormal.jpg"
import canvasBgSunny from "./images/canvasBgSunny.png"

interface Props {
  gameState: GameState,
  day: number,
}

function Canvas({gameState, day}: Props){
  




  return(
    <>

      
        <canvas className="w-full min-w[800px] md:w-[100%] md:h-84  h-42 rounded-2xl snap-center"
          id="canvas"
          style={{imageRendering: "pixelated"}}
        onClick={()=> setCount(prev => prev + 1)}></canvas>
        <img className="absolute bottom-1 right-2 size-15 bg-card-light/70 rounded-full" src={gameState.normal?"https://img.icons8.com/?size=100&id=UyNm3S4bECd7&format=png&color=000000":
          gameState.rainy?"https://img.icons8.com/?size=100&id=15360&format=png&color=000000":
          gameState.sunny?"https://img.icons8.com/?size=100&id=8LM7-CYX4BPD&format=png&color=000000":"https://img.icons8.com/?size=100&id=UyNm3S4bECd7&format=png&color=000000"}  id="eventLogo"/>

      
    </>
  )
}

export default Canvas;