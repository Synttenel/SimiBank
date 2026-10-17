import { useState, type Dispatch, type SetStateAction } from "react";

import type { Screen } from "./types";
import type { whereToGo } from "./whereToGo";

import idleKitchen from './images/kitchen-simi.mp4';

interface Props{
    onNavigate: Dispatch<SetStateAction<Screen>>,
    setWhereToGo: Dispatch<SetStateAction<whereToGo>>
}

function Kitchen({ onNavigate, setWhereToGo }: Props){

  const handleTransition = (where: whereToGo) => {
    setWhereToGo(where);
    onNavigate("transition");
  }

  return(
    <>
        
        <div className="w-[90%]  flex flex-wrap gap-5 justify-center items-center p-5  absolute left-1/2 top-1/2 -translate-1/2 bg-black/30 backdrop-blur-sm">
          {/*<!-- License: CC Attribution. Made by tetrisly: https://tetrisly.gumroad.com/l/freeicons -->*/}
          
          <button className="absolute right-5 top-5 bg-white rounded-2xl hover:bg-gray-300/80 cursor-pointer transition-colors duration-200 ease-in"
          onClick={() => handleTransition("kitchenToTv")}>
            <svg fill="#0000000" width="35px" height="35px" viewBox="0 0 1.05 1.05" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="m0.587 0.525 0.232 -0.232a0.044 0.044 0 1 0 -0.062 -0.062L0.525 0.463 0.293 0.232a0.044 0.044 0 1 0 -0.062 0.062L0.463 0.525l-0.232 0.232a0.044 0.044 0 1 0 0.062 0.062L0.525 0.587l0.232 0.232a0.044 0.044 0 0 0 0.062 0 0.044 0.044 0 0 0 0 -0.062z"/>
            </svg>
          </button>            
          <div className="w-100 h-50 rounded-2xl flex justify-center items-center text-3xl  bg-card-dark text-white">
            Conta: 2931
          </div>  
          </div>
        <video className="w-full rounded-2xl snap-center object-cover  "
        id="idleKitchen"
        autoPlay
        muted
        >
        <source src={idleKitchen} type="video/mp4" />
      </video>
    </>
  )

}

export default Kitchen;