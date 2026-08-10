import { useState } from "react";

import './App.css';

interface Props{
  onClick: () => void;
  nextDay: () => void;
}

function NavBar({onClick, nextDay}: Props){

  return(
    <>
        <div className="flex fixed bottom-0 justify-around items-center bg-card-light p-5 pb-6 w-screen h-18 rounded-t-2xl min-sm: shadow-2xs">
          <button className="flex flex-col justify-around items-center">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=55432&format=png&color=FFFFFF"/>
            <p className="font-bold">Itens</p>
          </button>
          <button className="flex flex-col justify-around items-center mb-5"
          onClick={() =>{nextDay()}}>
            <img className="W-15 h-15  bg-card-dark rounded-full p-1" src="https://img.icons8.com/?size=100&id=H0JqzxqGxPQm&format=png&color=FFFFFF"/>
            <p className="font-bold">Avançar Tempo</p>
          </button>
          <button className="flex flex-col justify-around items-center">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=77030&format=png&color=FFFFFF"/>
            <p className="font-bold"
            onClick={() => onClick()}>Loja</p>
          </button>
        </div>
    </>
  )
}

export default NavBar;