import { useState } from "react";

import type {Screen} from './types'
import type { ShopItem } from "./shopitems";

interface Props{
    onNavigate: (screen: Screen) => void;
    items: ShopItem[];
}

function Items({onNavigate, items}: Props){

  console.log(items, "iniciando teste");
  const meusItens = items.map((item, _) => {
    console.log(item.name);
    console.log(item.price);
    console.log(item.ammount);
    console.log(item.description);
    console.log(item.bought);
  })
  meusItens;

  return (
    <>
      <div className="flex flex-col relative justify-between items-start bg-card-light p-5 w-screen h-42 rounded-b-2xl min-sm: shadow-2xs"></div>
      <div className="absolute flex flex-col gap-10 justify-end items-end backdrop-blur-2xl z-60 left-1/2 bottom-0 -translate-x-1/2 h-screen w-screen">
        <div className="relative flex flex-wrap gap-5 overflow-auto justify-center items-center z-50 left-1/2 bottom-0 -translate-x-1/2 p-10 rounded-t-3xl h-[95%] w-screen bg-background shadow-2xs">
            {/*<!-- License: CC Attribution. Made by tetrisly: https://tetrisly.gumroad.com/l/freeicons -->*/}
            <button className="absolute right-5 top-5 bg-white rounded-2xl hover:bg-gray-300/80 cursor-pointer transition-colors duration-200 ease-in"
             onClick={() => onNavigate("menu")}>
                <svg fill="#0000000" width="35px" height="35px" viewBox="0 0 1.05 1.05" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="m0.587 0.525 0.232 -0.232a0.044 0.044 0 1 0 -0.062 -0.062L0.525 0.463 0.293 0.232a0.044 0.044 0 1 0 -0.062 0.062L0.463 0.525l-0.232 0.232a0.044 0.044 0 1 0 0.062 0.062L0.525 0.587l0.232 0.232a0.044 0.044 0 0 0 0.062 0 0.044 0.044 0 0 0 0 -0.062z"/>
                </svg>
          </button>
          <h1 className="absolute left-5 top-5 text-black font-bold text-2xl underline">Itens</h1>
            
            {items.map((item, _) => (
              <div className="flex flex-col justify-center items-center gap-5 mt-20 bg-card-light p-5  rounded-2xl min-sm: shadow-2xs" key={_}>
                <img src={item.image}/>
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>
                <h1>{item.ammount}</h1>
                <h1>{item.description}</h1>
              </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Items;