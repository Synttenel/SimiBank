import { useEffect, useState } from 'react'
import type {Screen} from './types'
import type { Event } from './Event'

import './App.css'

import Start from "./Start"
import ProfileBar from "./ProfileBar"
import CurrencyBar from './CurrencyBar'
import CardBar from './CardBar'
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
    event: Event,
}

function MainMenu({onNavigate, handleFun, name, profilePicture, day, money, card, showAlert, event}: Props) {

  const [alertVisibility, setAlertVisibility] = useState(false);

  useEffect(()=>{
    
    if(showAlert){
      setAlertVisibility(true);
    }
    
  },[showAlert])

  return (
    <>
      <EventAlert closeModal={()=> setAlertVisibility(false)} isVisible={alertVisibility} event={event}/>
      <div className="flex flex-col gap-10 justify-top items-center h-screen w-screen bg-background">
        <ProfileBar onClickProfile={()=> onNavigate("profile")} onClickConfiguration={() => onNavigate("configuration")} name={name} profilePicture={profilePicture} day={day} />

        <CurrencyBar onClickCurrency={() => onNavigate("currency")} money={money} />

        <CardBar onClickCard={() => onNavigate("card")} card={card} />

      </div>

      <NavBar onClickShop={() => onNavigate("shop")} onClickItems={() => onNavigate("items")} nextDay={() => handleFun()}   />
    </>
  )
}

export default MainMenu
