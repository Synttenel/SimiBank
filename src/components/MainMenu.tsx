import { useState } from 'react'
import type {Screen} from './types'

import './App.css'

import Start from "./Start"
import ProfileBar from "./ProfileBar"
import CurrencyBar from './CurrencyBar'
import CardBar from './CardBar'
import NavBar from './NavBar'
import UserCustom from './UserCustom'
import Shop from './Shop'

interface Props{
    onNavigate: (screen: Screen) => void;
    handleFun: ()=> void;
    day: number;
    money: number;
    card: number;
}

function MainMenu({onNavigate, handleFun, day, money, card}: Props) {

  return (
    <>
      
      <div className="flex flex-col gap-10 justify-top items-center h-screen w-screen bg-background">
        <ProfileBar onClickProfile={()=> onNavigate("profile")} onClickConfiguration={() => onNavigate("configuration")} day={day} />

        <CurrencyBar onClickCurrency={() => onNavigate("currency")} money={money} />

        <CardBar onClickCard={() => onNavigate("card")} card={card} />

      </div>

      <NavBar onClickShop={() => onNavigate("shop")} onClickItems={() => onNavigate("items")} nextDay={() => handleFun()}   />
    </>
  )
}

export default MainMenu
