import { useState, useEffect } from "react";

import type {Screen} from './types'

import type { Dispatch } from "react";
import type { SetStateAction } from "react";


interface Props{
    onNavigate: (screen: Screen) => void,
    disableAlert: boolean,
    setDisableAlert: Dispatch<SetStateAction<boolean>>,
}

function Configuration({onNavigate, disableAlert, setDisableAlert}: Props){

  const [alertButtonIO, setAlertButtonIO] = useState(disableAlert);

  const handleAlertToggle = () => {
    if(disableAlert){
      setDisableAlert(false);
    }
    else{
      setDisableAlert(true);
    }

    console.log("botão clickado");
  }

  useEffect(() => {
    console.log("disableAlert boolean", disableAlert);
    setAlertButtonIO(disableAlert);
    console.log(alertButtonIO)
  },[disableAlert])


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
          <h1 className="absolute left-5 top-5 text-black font-bold text-2xl underline">Configurações</h1>
          <div className="flex justify-start items-start  flex-wrap mt-10 w-full gap-5">
            <h1 className="text-2xl font-bold text-black underline">Desativar alertas</h1>
            <button className="bg-card-light h-10 w-20 p-1 rounded-full relative transition-all duration-200 ease-in "
            onClick={() => handleAlertToggle()}
            style={{background: (alertButtonIO?"#528585":"#fb2c36")}}>
              <div className="bg-background size-8 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform duration-200 ease-in"
              style={{transition: "transform 200ms ease-in",transform: `translateX(${(alertButtonIO?(-50):(50))}%)`}}></div>
            </button>
          </div>
          <button className="absolute bottom-5 bg-red-500 rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-red-500/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
          onClick={() => onNavigate("start")}>Sair</button>
        </div>
      </div>
    </>
  )
}

export default Configuration;