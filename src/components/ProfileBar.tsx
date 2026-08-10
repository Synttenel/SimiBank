import { useState } from "react";

import "./App.css"

  interface Props{
    day: number;
  }

  function ProfileBar({day}: Props){

    return(
      <>
        <div className="flex flex-col relative justify-between items-start bg-card-light p-5 w-screen h-42 rounded-b-2xl min-sm: shadow-2xs">
            <img className="rounded-full w-14 h-14 bg-gray-400/70 "
             src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"/>
            <h1 className="font-bold">Olá, NOME DO USUÁRIO</h1>
            <p className="font-bold">Dia: {day}</p>
            <div className="flex gap-5 absolute right-0 top-0 p-5">
                <button className="rounded-full w-14 h-14 bg-gray-400/70 bg-origin-content bg-no-repeat bg-cover" style={{backgroundImage: "url('https://img.icons8.com/?size=100&id=646&format=png&color=FFFFFF')"}}></button>
                <button className="rounded-full w-14 h-14 bg-gray-400/70 bg-origin-content bg-no-repeat bg-cover" style={{backgroundImage: "url('https://img.icons8.com/?size=100&id=wzzSem2CUNd2&format=png&color=FFFFFF')"}}></button>
            </div>
        </div> 
      </>
    )
  }

export default ProfileBar;