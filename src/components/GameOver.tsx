import { useState } from "react";
import type { Screen } from "./types";

import './App.css'

interface Props{
  onNavigate: (screen: Screen) => void;
}

function GameOver({onNavigate}: Props) {
  
  return(
    <>
      <div className="flex flex-col gap-10 justify-top items-center h-screen w-screen bg-background">
        <div className="bg-card-light p-5 w-screen text-center rounded-b-2xl text-3xl min-sm: font-bold shadow-2xs">Game Over!</div>
        <div className="flex relative flex-col gap-10 justify-center items-center p-10 rounded-3xl h-3/5 w-4/5 bg-card-light shadow-2xs">
        <h1 className="text-center font-bold text-2xl">Você excedeu o limite de 500 reais e declarou falência, o jogo acabou!</h1>
        <button className="absolute bottom-5 bg-red-500 rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-red-500/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
          onClick={() => onNavigate("start")}>Voltar ao menu principal</button>
        </div>
      </div>
    </>
  )
}

export default GameOver;