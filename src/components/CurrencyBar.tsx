import { useState } from "react";

import "./App.css"

function CurrencyBar(){

  return(
    <>
        <div className="flex flex-col gap-10 relative justify-top items-start bg-card-medium p-5 w-[90%] h-42 rounded-2xl min-sm: shadow-2xs">
            <h1 className="font-bold text-2xl">Conta</h1>
            <h1 className="font-bold text-2xl">R$1000,00</h1>
            <button className="flex justify-center items-center absolute font-bold right-5 bottom-10">Extrato 
                <img className="w-5 h-5 mt-1" 
                src="https://img.icons8.com/?size=100&id=60671&format=png&color=FFFFFF"/>
                </button>
        </div>
    </>
  )
}

export default CurrencyBar;