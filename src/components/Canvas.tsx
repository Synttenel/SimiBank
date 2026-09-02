import { useState, useEffect} from "react";

import type { GameState } from "./gamestate";

import "./images/svgviewer-output.svg"

interface Props {
  gameState: GameState,
  day: number,
}

function Canvas({gameState, day}: Props){
  
  console.log(gameState)
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let canvas = document.querySelector("canvas");
    
    let background = "red";

    if(gameState.normal){
      background = "lightblue";
    }
    if(gameState.rainy){
      background = "gray";
    }
    if(gameState.sunny){
      background = "yellow"
    }

    if(canvas){
    let c = canvas.getContext("2d");
    

      c.imageSmoothingEnabled = false;
      
    

      c.fillStyle = "black";
    
      c.fillRect(0,0,canvas.width, canvas.height);


      c.fillStyle = "white";

      let windowProp = {
        "width": canvas.width/1.25,
        "height": canvas.height/1.5
      }

      c.fillRect(canvas.width/2 - windowProp.width/2, canvas.height/2 - windowProp.height/2, windowProp.width, windowProp.height);
      
      
      
    }

    console.log("canvas")


  },[day])



  return(
    <>
      <canvas className="max-w[100%] min-w[800px] h-42 border-2 rounded-2xl"
       id="canvas"
       style={{imageRendering: "pixelated"}}
      onClick={()=> setCount(prev => prev + 1)}></canvas>
    </>
  )
}

export default Canvas;