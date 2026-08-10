import { useState } from "react";

import type {Screen} from './types'

import "./App.css"

  interface Props{
    onClickProfile: () => void;
    onClickConfiguration: () => void;
    day: number;
  }

  function ProfileBar({onClickProfile, onClickConfiguration, day}: Props){

    return(
      <>
        <div className="flex flex-col relative justify-between items-start bg-card-light p-5 w-screen h-42 rounded-b-2xl min-sm: shadow-2xs">
            <img className="rounded-full w-14 h-14 bg-gray-400/70 "
             src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
             onClick={() => onClickProfile()}/>
            <h1 className="font-bold">Olá, NOME DO USUÁRIO</h1>
            <p className="font-bold">Dia: {day}</p>
            <div className="flex gap-5 absolute right-0 top-0 p-5">
                <button className="rounded-full w-14 h-14 bg-gray-400/70 bg-origin-content bg-no-repeat bg-cover" 
                style={{backgroundImage: "url('https://img.icons8.com/?size=100&id=wzzSem2CUNd2&format=png&color=FFFFFF')"}}
                onClick={() => onClickConfiguration()}></button>
            </div>
        </div> 
      </>
    )
  }

export default ProfileBar;