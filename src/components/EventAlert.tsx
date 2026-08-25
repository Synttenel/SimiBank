import { useState } from "react";

import type { Event } from "./Event";

import type { Dispatch } from "react";
import type { SetStateAction } from "react";


import './App.css'

interface Props{
    closeModal: () => void,
    isVisible: boolean,
    event: Event,
    disableAlert: boolean,
    setDisableAlert: Dispatch<SetStateAction<boolean>>
}

function EventAlert({closeModal, isVisible, event, disableAlert, setDisableAlert}: Props){
  

  const handleDisableAlert = () => {
    setDisableAlert(true);

    console.log(disableAlert)
  }

  return(
    <>
      {!disableAlert && (
      <div className="absolute flex flex-col gap-10 justify-center items-center backdrop-blur-sm backdrop-brightness-60 z-60 left-1/2 bottom-0 -translate-x-1/2 h-screen w-screen"
      style={{visibility: isVisible?"visible":"hidden"}}>
        <div className="relative flex flex-wrap gap-5 overflow-auto justify-center items-center z-50 left-1/2 bottom-0 -translate-x-1/2 p-10 rounded-t-3xl rounded-b-3xl h-[85%] w-screen bg-background shadow-2xs">
          <h1 className="absolute left-5 top-5 text-black font-bold text-2xl underline">Evento</h1>
          <div className="flex items-start flex-col flex-wrap mt-10 w-full gap-5">
            <div className="relative flex flex-col justify-center items-center bg-card-medium rounded-2xl p-5 h-auto w-full gap-5">
                <h1 className="text-2xl font-bold underline">{event.name}</h1>
                <img className="size-30 p-3 bg-card-dark rounded-full" src={event.image}/>
                <h1 className="">{event.context}</h1>
            </div>
          </div>
            <button className="bg-red-500 rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-red-500/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
            onClick={() => handleDisableAlert()}>Desativar alerta</button>
            <button className="bg-card-light rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-card-light/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current "
            onClick={() => closeModal()}>Ok</button>
        </div>
      </div>
      )}
      
    </>
  )
}

export default EventAlert;