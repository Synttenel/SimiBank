import { useState, useEffect} from "react";

import type { GameState } from "./gamestate";

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
      const draw = () =>{
  
        c.imageSmoothingEnabled = false;
        
      

        c.fillStyle = background;
      
        c.fillRect(0,0,canvas.width, canvas.height);
  
       

      }
      requestAnimationFrame(draw);
    }

    console.log("canvas")


  },[day])



  return(
    <>
      <canvas className="max-w[1000px] min-w[800px] h-42 border-2 rounded-2xl"
       id="canvas"
       style={{imageRendering: "pixelated"}}
      onClick={()=> setCount(prev => prev + 1)}></canvas>
    </>
  )
}

export default Canvas;