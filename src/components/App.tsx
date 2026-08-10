import { useState } from 'react'

import './App.css'

import Start from "./Start"
import MainMenu from "./MainMenu"
import ProfileBar from "./ProfileBar"
import CurrencyBar from './CurrencyBar'
import CardBar from './CardBar'
import NavBar from './NavBar'
import UserCustom from './UserCustom'
import Shop from './Shop'

type Screen = "menu" | "shop" | "start" | "profile" | "card" | "currency";


function App() {

  const [started, setStarted] = useState(false);
  const [screen, setScreen] = useState<Screen>("menu");
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
      return <MainMenu  handleFun={() => handleDay()} day={day} money={money} card={card} />;
    case "shop":
      return <Shop  />;
    case "start":
      return <Start  onStart={()=>setStarted(true)}/>;
    case "profile":
      return <UserCustom  />;
    case "card":
    case "currency":
  }

  
  if(!started){
    return (<><Start onStart={() => setStarted(true)} /></>)
  }

  return (
    <>
    </>
  )
}

export default App
