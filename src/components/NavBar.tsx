import { useState } from "react";

import './App.css';

function NavBar(){

  return(
    <>
        <div className="flex fixed bottom-0 justify-around items-center bg-card-light p-5 pb-6 w-screen h-18 rounded-t-2xl min-sm: shadow-2xs">
          <button className="flex flex-col justify-around items-center">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=FFFFFF"/>
            <p className="font-bold">Home</p>
          </button>
          <button className="flex flex-col justify-around items-center mb-5">
            <img className="W-15 h-15  bg-card-dark rounded-full p-1" src="https://img.icons8.com/?size=100&id=H0JqzxqGxPQm&format=png&color=FFFFFF"/>
            <p className="font-bold">Avançar Tempo</p>
          </button>
          <button className="flex flex-col justify-around items-center">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=3686&format=png&color=FFFFFF"/>
            <p className="">Loja</p>
          </button>
        </div>
    </>
  )
}

export default NavBar;