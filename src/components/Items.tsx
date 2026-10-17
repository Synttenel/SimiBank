import { useState, type Dispatch, type SetStateAction } from "react";

import type {Screen} from './types'
import type { ShopItem } from "./shopitems";
import type { whereToGo } from "./whereToGo";

import idleItems from './images/items-simi.mp4'

interface Props{
    onNavigate: (screen: Screen) => void;
    items: ShopItem[],
    setWhereToGo: Dispatch<SetStateAction<whereToGo>>
}

function Items({onNavigate, items, setWhereToGo}: Props){

  console.log(items, "iniciando teste");
  const meusItens = items.map((item, _) => {
    console.log(item.name);
    console.log(item.price);
    console.log(item.ammount);
    console.log(item.description);
  })
  meusItens;

  const handleTransition = (where: whereToGo) => {
    setWhereToGo(where);
    onNavigate("transition");
  }

  return (
    <>
      <div className="w-[90%]  flex flex-wrap gap-5 justify-center items-center p-5  absolute left-1/2 top-1/2 -translate-1/2 bg-black/30 backdrop-blur-sm">
          {/*<!-- License: CC Attribution. Made by tetrisly: https://tetrisly.gumroad.com/l/freeicons -->*/}
          
          <button className="absolute right-5 top-5 bg-white rounded-2xl hover:bg-gray-300/80 cursor-pointer transition-colors duration-200 ease-in"
          onClick={() => handleTransition("itemsToTv")}>
            <svg fill="#0000000" width="35px" height="35px" viewBox="0 0 1.05 1.05" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="m0.587 0.525 0.232 -0.232a0.044 0.044 0 1 0 -0.062 -0.062L0.525 0.463 0.293 0.232a0.044 0.044 0 1 0 -0.062 0.062L0.463 0.525l-0.232 0.232a0.044 0.044 0 1 0 0.062 0.062L0.525 0.587l0.232 0.232a0.044 0.044 0 0 0 0.062 0 0.044 0.044 0 0 0 0 -0.062z"/>
            </svg>
          </button>
          
          <h1 className="absolute left-5 top-5 text-white font-bold text-2xl underline">Loja</h1>
          
            {items.map((item, _) => (
              <div className="relative flex flex-col justify-center items-center gap-5 mt-20 bg-card-light p-5  rounded-2xl min-sm: shadow-2xs" key={_}>
                <img src={item.image}/>
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <h2 className="absolute top-5 right-5 text-2xl font-bold ">{item.ammount}x</h2>
                <h2 className="text-1xl text-center font-bold">{item.description}</h2>
              </div>
          ))}  
          
        </div>
        <video className="w-full rounded-2xl snap-center object-cover  "
        id="idleShop"
        autoPlay
        muted
        >
        <source src={idleItems} type="video/mp4" />
      </video>
      
    </>
  )
}

export default Items;