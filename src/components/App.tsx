import { useState } from 'react'
import type {Screen} from './types'
import type { ShopItem } from './shopitems'

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
  const [shopItems, setShopItems] = useState<ShopItem[]>([
    
    {
      name: "Caixa de Som",
      image: "https://img.icons8.com/?size=100&id=9422&format=png&color=000000",
      price: 150,
      ammount: 1,
      description: "Diminui a chance de receber efeitos negativos",
      bought: false
    },
    {
      name: "Ventilador",
      image: "https://img.icons8.com/?size=100&id=41286&format=png&color=000000",
      price: 150,
      ammount: 1,
      description: "Diminui a chance de receber efeitos negativos",
      bought: false
    }
  ]);
  const [items, setItems] = useState<ShopItem[]>([
    
  ])
  const [income, setIncome] = useState(100);
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
      name={name} 
      profilePicture={profilePicture}
      day={day} 
      money={money} 
      card={card} />;
    case "shop":
      return <Shop onNavigate={setScreen}
      money={money}
      setMoney={setMoney}
      items={items}
      setItems={setItems}
      shopItems={shopItems}
      setShopItems={setShopItems} />;
    case "configuration":
      return <Configuration onNavigate={setScreen} />
    case "items":
      return <Items onNavigate={setScreen} 
      items={items}/>;
    case "start":
      return <Start onNavigate={setScreen} />;
    case "profile":
      return <UserCustom onNavigate={setScreen} 
      name={name} 
      setName={setName}
      profilePicture={profilePicture}
      setProfilePicture={setProfilePicture} />;
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
