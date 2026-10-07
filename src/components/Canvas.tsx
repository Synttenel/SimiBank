import { useState, useEffect} from "react";

import type { GameState } from "./gamestate";

import VideoPlayer from "./VideoPlayer";

import bgSunny from './images/sunny-simi.mp4'
import bgLightSnow from './images/light-snow-simi.mp4'
import bgLightRain from './images/light-rain-simi.mp4'


interface Props {
  gameState: GameState,
  day: number,
}

function Canvas({gameState, day}: Props){
  
  const [currentCanvas, setCurrentCanvas] = useState("lightSnow");

  useEffect(() => {

    let videoObject = document.getElementById("videoObject");

    gameState.normal?setCurrentCanvas("lightSnow"):
    gameState.rainy?setCurrentCanvas("lightRain"):
    gameState.sunny?setCurrentCanvas("sunny"): "sunny";
    
    

    console.log(currentCanvas);
  },[day])



  return(
    <>

      
        <VideoPlayer  currentCanvas={currentCanvas}
        day={day}/>

        <img className="absolute bottom-1 right-2 size-15 bg-card-light/70 rounded-full" src={gameState.normal?"https://img.icons8.com/?size=100&id=UyNm3S4bECd7&format=png&color=000000":
          gameState.rainy?"https://img.icons8.com/?size=100&id=15360&format=png&color=000000":
          gameState.sunny?"https://img.icons8.com/?size=100&id=8LM7-CYX4BPD&format=png&color=000000":"https://img.icons8.com/?size=100&id=UyNm3S4bECd7&format=png&color=000000"}  id="eventLogo"/>

      
    </>
  )
}

export default Canvas;