import { useState } from 'react'
import type {Screen} from './types'

import './App.css'

import Start from "./Start"
import MainMenu from "./MainMenu"
import ProfileBar from "./ProfileBar"
import CurrencyBar from './CurrencyBar'
import CardBar from './CardBar'
import NavBar from './NavBar'
import UserCustom from './UserCustom'
import Shop from './Shop'




function App() {

  const [screen, setScreen] = useState<Screen>("start");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
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
      return <MainMenu onNavigate={setScreen} handleFun={() => handleDay()} day={day} money={money} card={card} />;
    case "shop":
      return <Shop onNavigate={setScreen} />;
    case "configuration":
    case "start":
      return <Start  onNavigate={setScreen}/>;
    case "profile":
      return <UserCustom  onNavigate={setScreen}/>;
    case "currency":
    case "card":
  }

  return (
    <>
    </>
  )
}

export default App
