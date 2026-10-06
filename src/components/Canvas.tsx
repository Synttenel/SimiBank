import { useState, useEffect} from "react";

import type { GameState } from "./gamestate";

import bgSunny from './images/sunny-simi.mp4'
import bgLightSnow from './images/light-snow-simi.mp4'
import bgLightRain from './images/light-rain-simi.mp4'


interface Props {
  gameState: GameState,
  day: number,
}

function Canvas({gameState, day}: Props){
  
  const [currentCanvas, setCurrentCanvas] = useState<String>(bgLightSnow);

  useEffect(() => {

    let videoObject = document.getElementById("videoObject");

    gameState.normal?setCurrentCanvas(bgLightSnow):
    gameState.rainy?setCurrentCanvas(bgLightRain):
    gameState.sunny?setCurrentCanvas(bgSunny): "";
    videoObject.load()

    console.log(currentCanvas);
  },[day])



  return(
    <>

      
        <video className="w-full min-w[800px] md:w-[100%] md:h-84  h-42 rounded-2xl snap-center object-cover "
        id="videoObject"
        autoPlay
        muted>
          <source src={currentCanvas} type="video/mp4"/>
        </video>
        <img className="absolute bottom-1 right-2 size-15 bg-card-light/70 rounded-full" src={gameState.normal?"https://img.icons8.com/?size=100&id=UyNm3S4bECd7&format=png&color=000000":
          gameState.rainy?"https://img.icons8.com/?size=100&id=15360&format=png&color=000000":
          gameState.sunny?"https://img.icons8.com/?size=100&id=8LM7-CYX4BPD&format=png&color=000000":"https://img.icons8.com/?size=100&id=UyNm3S4bECd7&format=png&color=000000"}  id="eventLogo"/>

      
    </>
  )
}

export default Canvas;