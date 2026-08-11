import { useState } from 'react'
import type {Screen} from './types'

import './App.css'

import Start from "./Start"
import MainMenu from "./MainMenu"
import Configuration from './Configuration'
import ProfileBar from "./ProfileBar"
import CurrencyBar from './CurrencyBar'
import CurrencyHistory from './CurrencyHistory'
import CardBar from './CardBar'
import CardHistory from './CardHistory'
import NavBar from './NavBar'
import UserCustom from './UserCustom'
import Items from './Items'
import Shop from './Shop'




function App() {

  const [screen, setScreen] = useState<Screen>("start");
  const [name, setName] = useState("Guilherme");
  const [profilePicture, setProfilePicture] = useState("https://img.icons8.com/?size=100&id=LypZSIS7xVVW&format=png&color=000000");
  const [items, setItems] = useState([
    {

    }
  ])
  const [income, setIncome] = useState(2);
  const [expense, setExpense] = useState(1);
  const [money, setMoney] = useState(0);
  const [card, setCard] = useState(0);
  const [day, setDay] = useState(0);

  const handleIncome = () =>{
    setMoney(money + (income - expense));
  }

  const handleDay = () =>{
    setDay(day + 1);
    handleIncome();

  }

  switch(screen){
    case "menu":
      return <MainMenu onNavigate={setScreen} 
      handleFun={() => handleDay()} 
      day={day} 
      money={money} 
      card={card} />;
    case "shop":
      return <Shop onNavigate={setScreen} />;
    case "configuration":
      return <Configuration onNavigate={setScreen} />
    case "items":
      return <Items onNavigate={setScreen} />;
    case "start":
      return <Start onNavigate={setScreen} />;
    case "profile":
      return <UserCustom onNavigate={setScreen} 
      name={name} 
      setName={()=>setName}
      profilePicture={profilePicture}
      setProfilePicture={() => setProfilePicture} />;
    case "currency":
      return <CurrencyHistory onNavigate={setScreen} />;
    case "card":
      return <CardHistory onNavigate={setScreen} />;
  }

  return (
    <>
    </>
  )
}

export default App
