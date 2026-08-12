import { useState } from "react";

import type {Screen} from './types'

import "./App.css"

  interface Props{
    onClickProfile: () => void;
    onClickConfiguration: () => void;
    name: string;
    profilePicture: string;
    day: number;
  }

  function ProfileBar({onClickProfile, onClickConfiguration, name, profilePicture, day}: Props){

    return(
      <>
        <div className="flex flex-col relative justify-between items-start bg-card-light p-5 w-screen h-42 rounded-b-2xl min-sm: shadow-2xs">
            <img className="rounded-full w-14 h-14 bg-gray-400/70 "
             src={profilePicture}
             onClick={() => onClickProfile()}/>
            <h1 className="font-bold">Olá, {name}.</h1>
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