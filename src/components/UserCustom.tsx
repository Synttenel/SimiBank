import { useState } from "react";
import type {Screen} from './types'


import "./App.css";
import PictureChange from "./PictureChange";
import NameChange from "./NameChange";

interface Props{
  onNavigate: (screen: Screen) => void;
  name: string;
  setName: () => void;
  profilePicture: string;
  setProfilePicture: () => void;
}

function UserCustom({onNavigate, name, setName, profilePicture, setProfilePicture}: Props){

  const [isPictureVisible, setIsPictureVisible] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);

  return(
    <>
      
      <PictureChange setHidden={() => setIsPictureVisible(false)} 
      isVisible={isPictureVisible} />

      <NameChange setHidden={() => setIsNameVisible(false)}
      isVisible={isNameVisible} 
      setName={setName}/>
      
      <div className="flex flex-col relative justify-between items-start bg-card-light p-5 w-screen h-42 rounded-b-2xl min-sm: shadow-2xs"></div>
      <div className="absolute flex flex-col gap-10 justify-end items-end backdrop-blur-2xl z-50 left-1/2 bottom-0 -translate-x-1/2 h-screen w-screen">
        <div className="relative flex flex-col gap-10 justify-start items-center z-50 left-1/2 bottom-0 -translate-x-1/2 p-10 rounded-t-3xl h-[95%] w-screen bg-background shadow-2xs">
          {/*<!-- License: CC Attribution. Made by tetrisly: https://tetrisly.gumroad.com/l/freeicons -->*/}
          <button className="absolute right-5 top-5 bg-white rounded-2xl hover:bg-gray-300/80 cursor-pointer transition-colors duration-200 ease-in"
           onClick={()=> onNavigate("menu")}>
            <svg fill="#0000000" width="35px" height="35px" viewBox="0 0 1.05 1.05" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="m0.587 0.525 0.232 -0.232a0.044 0.044 0 1 0 -0.062 -0.062L0.525 0.463 0.293 0.232a0.044 0.044 0 1 0 -0.062 0.062L0.463 0.525l-0.232 0.232a0.044 0.044 0 1 0 0.062 0.062L0.525 0.587l0.232 0.232a0.044 0.044 0 0 0 0.062 0 0.044 0.044 0 0 0 0 -0.062z"/>
            </svg>
          </button>
          <h1 className="absolute left-5 top-5 text-black font-bold text-2xl underline">Customizar perfil</h1>
          <div className="flex flex-col justify-evenly items-center pt-10 h-full w-full">
            <button className="relative gap-2 border-blue-800"
            onClick={() => setIsPictureVisible(true)}>
              <img className="rounded-full bg-gray-300 p-1 w-45 h-45" src={profilePicture}/>
              <p className="text-blue-500 text-2xl underline">Editar Avatar</p>
          
            </button>
            <button className="relative flex flex-col justify-between gap-2 items-center"
            onClick={() => setIsNameVisible(true)}>
              <p className="text-black font-bold text-3xl">{name}</p>
              <p className="text-blue-500 text-2xl underline">Editar Nome</p>
              
            </button>
          </div>
            <button className="absolute bottom-5 bg-card-light rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-card-light/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
            >Salvar</button>
        </div>
      </div>
    </>
  )
}

export default UserCustom;