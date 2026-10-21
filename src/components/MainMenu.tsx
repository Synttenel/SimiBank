import { useEffect, useState } from 'react'
import type {Screen} from './types'
import type { Event } from './Event'
import type { GameState } from './gamestate';
import type { whereToGo } from './whereToGo';

import type { Dispatch } from "react";
import type { SetStateAction } from "react";

import './App.css'

import Start from "./Start"
import ProfileBar from "./ProfileBar"
import Canvas from './Canvas';
import Slider from './Slider';
import CurrencyBar from './CurrencyBar'
import NavBar from './NavBar'
import UserCustom from './UserCustom'
import Shop from './Shop'
import EventAlert from './EventAlert'
import StatusBar from './StatusBar';

interface Props{
    onNavigate: Dispatch<SetStateAction<Screen>>,
    handleFun: ()=> void;
    name: string;
    profilePicture: string;
    day: number;
    hunger: number;
    money: number;
    income: number;
    expense: number;
    card: number;
    showAlert: boolean,
    setShowAlert: Dispatch<SetStateAction<boolean>>,
    disableAlert: boolean,
    setDisableAlert: Dispatch<SetStateAction<boolean>>,
    gameState: GameState,
    event: Event,
    setWhereToGo: Dispatch<SetStateAction<whereToGo>>,
}

function MainMenu({onNavigate, handleFun, name, profilePicture, day, hunger, money, income, expense, card, showAlert, setShowAlert, disableAlert, setDisableAlert, gameState, event, setWhereToGo}: Props) {

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
      <div className="flex justify-center items-center h-screen w-screen gap-10 bg-black p-5">
        {/*<ProfileBar onClickProfile={()=> onNavigate("profile")} onClickConfiguration={() => onNavigate("configuration")} name={name} profilePicture={profilePicture} day={day} />*/}

        <StatusBar day={day} hunger={hunger} money={money} income={income} expense={expense} />
        <Slider gameState={gameState} day={day} onNavigate={onNavigate} setWhereToGo={setWhereToGo} />

        {/*<CurrencyBar onClickCurrency={() => onNavigate("currency")} money={money} />*/}

      </div>

      {/*<NavBar onClickShop={() => onNavigate("shop")} onClickItems={() => onNavigate("items")} nextDay={() => handleFun()}   />*/}
    </>
  )
}

export default MainMenu
