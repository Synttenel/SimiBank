import { useState } from 'react'


import './App.css'

import Start from "./Start"
import ProfileBar from "./ProfileBar"
import CurrencyBar from './CurrencyBar'
import CardBar from './CardBar'
import NavBar from './NavBar'
import UserCustom from './UserCustom'
import Shop from './Shop'

interface Props{
    handleFun: ()=> void;
    day: number;
    money: number;
    card: number;
}

function MainMenu({handleFun, day, money, card}: Props) {


  return (
    <>
      
      <div className="flex flex-col gap-10 justify-top items-center h-screen w-screen bg-background">
        <ProfileBar day={day}/>

        <CurrencyBar money={money} />

        <CardBar card={card}/>

      </div>

      <NavBar nextDay={() => handleFun()}/>
    </>
  )
}

export default MainMenu
