import { useState } from "react";

import "./App.css"

interface Props{
  card: number;
}

function CardBar({card}: Props){

  return(
    <>
        <div className="flex flex-col gap-10 mb-26 relative justify-top items-start bg-card-medium p-5 w-[90%] h-42 rounded-2xl min-sm: shadow-2xs">
            <h1 className="font-bold text-2xl">Cartão</h1>
            <h1 className="font-bold text-2xl">R${card}</h1>
            <button className="flex justify-center items-center absolute font-bold right-5 bottom-10">Fatura
                <img className="w-5 h-5 mt-1" src="https://img.icons8.com/?size=100&id=60671&format=png&color=FFFFFF"/>
            </button>
        </div>
    </>
  )
}

export default CardBar;