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
    const eventLogo = document.getElementById("eventLogo");

    let background = "red";

    if(gameState.normal){
      canvas.style.background = "white";
      
    }
    if(gameState.rainy){
      canvas.style.background = "gray";
    }
    if(gameState.sunny){
      canvas.style.background = "lightblue";
    }

    if(canvas){
    let c = canvas.getContext("2d");
    c.lineCap = 'round';
    
    
      let w = canvas.width;
      let h = canvas.height;
    
      
      var init = [];
    var maxParts = 1000;
    c.strokeStyle= "white";
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      })
    }
    
    var particles = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }
    
    function draw() {
      c.clearRect(0, 0, w, h);
      for(var cr = 0; cr < particles.length; cr++) {
        var p = particles[cr];
        c.beginPath();
        c.moveTo(p.x, p.y);
        c.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        c.stroke();
      }
      move();
    }
    
    function move() {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }
    
    setInterval(draw, 45);


      
      
      
    }

    console.log("canvas")


  },[day])



  return(
    <>

      <div className="border-black border-2 rounded-2xl relative">
        <canvas className="max-w[100%] min-w[800px] h-42 border-2 rounded-2xl"
          id="canvas"
          style={{imageRendering: "pixelated"}}
        onClick={()=> setCount(prev => prev + 1)}></canvas>
        <img className="absolute bottom-1 right-2 size-15" src={gameState.normal?"https://img.icons8.com/?size=100&id=UyNm3S4bECd7&format=png&color=000000":
          gameState.rainy?"https://img.icons8.com/?size=100&id=15360&format=png&color=000000":
          gameState.sunny?"https://img.icons8.com/?size=100&id=8LM7-CYX4BPD&format=png&color=000000":"https://img.icons8.com/?size=100&id=UyNm3S4bECd7&format=png&color=000000"}  id="eventLogo"/>
      </div>
    </>
  )
}

export default Canvas;