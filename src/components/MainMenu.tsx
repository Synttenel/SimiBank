import { useEffect, useState } from 'react'
import type {Screen} from './types'
import type { Event } from './Event'
import type { GameState } from './gamestate';

import type { Dispatch } from "react";
import type { SetStateAction } from "react";

import './App.css'

import Start from "./Start"
import ProfileBar from "./ProfileBar"
import Canvas from './Canvas';
import CurrencyBar from './CurrencyBar'
import NavBar from './NavBar'
import UserCustom from './UserCustom'
import Shop from './Shop'
import EventAlert from './EventAlert'

interface Props{
    onNavigate: (screen: Screen) => void;
    handleFun: ()=> void;
    name: string;
    profilePicture: string;
    day: number;
    money: number;
    card: number;
    showAlert: boolean,
    setShowAlert: Dispatch<SetStateAction<boolean>>,
    disableAlert: boolean,
    setDisableAlert: Dispatch<SetStateAction<boolean>>,
    gameState: GameState,
    event: Event,
}

function MainMenu({onNavigate, handleFun, name, profilePicture, day, money, card, showAlert, setShowAlert, disableAlert, setDisableAlert, gameState, event}: Props) {

  const [alertVisibility, setAlertVisibility] = useState(false);

  useEffect(()=>{
    
    if(showAlert){
      setAlertVisibility(true);
      setShowAlert(false);
    }
    
  },[showAlert])

  return (
    <>
      <EventAlert closeModal={()=> setAlertVisibility(false)} isVisible={alertVisibility} event={event} disableAlert={disableAlert} setDisableAlert={setDisableAlert} />
      <div className="flex flex-col gap-10 justify-top items-center h-screen w-screen bg-background">
        <ProfileBar onClickProfile={()=> onNavigate("profile")} onClickConfiguration={() => onNavigate("configuration")} name={name} profilePicture={profilePicture} day={day} />

        <Canvas gameState={gameState} day={day}/>

        <CurrencyBar onClickCurrency={() => onNavigate("currency")} money={money} />

      </div>

      <NavBar onClickShop={() => onNavigate("shop")} onClickItems={() => onNavigate("items")} nextDay={() => handleFun()}   />
    </>
  )
}

export default MainMenu
