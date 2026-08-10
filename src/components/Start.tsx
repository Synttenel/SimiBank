import { useState } from "react";
import type {Screen} from './types'


import App from "./App"

interface StartProps {
  onNavigate: (screen: Screen) => void;
}

function Start({onNavigate}: StartProps) {


  const handleStart = () =>{
    console.log("io")
    onNavigate("menu");

  }

  const handleModal = () =>{
    const modal = document.getElementById("modal");
    console.log(modal, modal?.style.visibility  );
    if(modal?.style.visibility === "hidden"){
        console.log("is hidden")
        modal.style.visibility = "visible";
    }
    
    
 
  }
  const handleCloseModal = () =>{
    const modal = document.getElementById("modal");
    if(modal?.style.visibility === "visible"){
        modal.style.visibility = "hidden";
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 justify-top items-center h-screen w-screen bg-background">
        <div className="bg-card-light p-5 w-screen text-center rounded-b-2xl text-3xl min-sm: font-bold shadow-2xs">SimiBank</div>
        <div className="flex relative flex-col gap-10 justify-center items-center p-10 rounded-3xl h-3/5 w-4/5 bg-card-light shadow-2xs">
          <div className="absolute invisible w-full h-full  bg-card-dark/50 backdrop-blur-[5px] rounded-3xl" 
          style={{visibility: "hidden"}} 
          id="modal">

            {/*<!-- License: CC Attribution. Made by tetrisly: https://tetrisly.gumroad.com/l/freeicons -->*/}
            <button className="absolute right-5 top-5 bg-white rounded-2xl hover:bg-white/80 cursor-pointer transition-colors duration-200 ease-in"
            onClick={() => handleCloseModal()}>
              <svg fill="#0000000" width="35px" height="35px" viewBox="0 0 1.05 1.05" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="m0.587 0.525 0.232 -0.232a0.044 0.044 0 1 0 -0.062 -0.062L0.525 0.463 0.293 0.232a0.044 0.044 0 1 0 -0.062 0.062L0.463 0.525l-0.232 0.232a0.044 0.044 0 1 0 0.062 0.062L0.525 0.587l0.232 0.232a0.044 0.044 0 0 0 0.062 0 0.044 0.044 0 0 0 0 -0.062z"/>
              </svg>
            </button>

          </div>
            <button className="bg-blue-600 rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-blue-600/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
            onClick={() => handleStart()}>Novo jogo</button>
            <button className="bg-blue-900 rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-blue-900/80 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current disabled:cursor-not-allowed bg-blue-900/30" disabled>Carregar jogo</button>
            <button className="bg-gray-800 rounded-2xl w-5/6 p-1 shadow-2xs hover:bg-gray-800/80 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
            onClick={()=>handleModal()}>Saiba mais</button>
        </div>
      </div>
    </>
  )
}

export default Start