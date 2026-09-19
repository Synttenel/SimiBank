import { useState } from "react";
import type { Screen } from "./types";

import './App.css'
import type { ShopItem } from "./shopitems";

interface Props{
  onNavigate: (screen: Screen) => void;
  gameOver: any,
  day: number,
  money: number,
  income: number,
  expense: number,
  items: ShopItem[],
}

function GameOver({onNavigate, gameOver, day, money, income, expense, items}: Props) {
  
  return(
    <>
      <div className="flex flex-col gap-10 justify-top items-center h-screen w-screen bg-background">
        <div className="bg-card-light p-5 w-screen text-center rounded-b-2xl text-3xl min-sm: font-bold shadow-2xs">Game Over!</div>
        <div className="flex relative flex-col gap-10 justify-center items-center p-10 rounded-3xl w-4/5 bg-card-light shadow-2xs">
        <h1 className="text-center font-bold text-xl">{gameOver.message}</h1>
        <p className="text-center font-bold text-xl">{gameOver.context}</p>
        <p className="text-center font-bold text-xl">Você alcançou {day} dias!</p>
        <p className="text-center font-bold text-xl">Você alcançou {Math.floor(income)} reais de salário!</p>
        <p className="text-center font-bold text-xl">Você alcançou {Math.floor(expense)} reais de custos!</p>
        <p className="text-center font-bold text-xl">Você conseguiu comprar {items.length} itens únicos!</p>
        </div>
        <button className="sticky bottom-5 bg-red-500/80 backdrop-blur-2xl rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-red-500/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
          onClick={() => onNavigate("start")}>Voltar ao menu principal</button>
      </div>
    </>
  )
}

export default GameOver;