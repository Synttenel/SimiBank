import { useState, useEffect } from 'react'
import type {Screen} from './types'
import type { ShopItem } from './shopitems'
import type { Event } from './Event'

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
import GameOver from './GameOver'

function App() {
  
  const [screen, setScreen] = useState<Screen>("start");
  const [name, setName] = useState("Guilherme");
  const [profilePicture, setProfilePicture] = useState("https://img.icons8.com/?size=100&id=LypZSIS7xVVW&format=png&color=000000");
  const [items, setItems] = useState<ShopItem[]>([])
  const itemEffect = [
    (ammount: number) => {
      let itemName = "Caixa de Som";
      setIncome(prev => prev * (1 + (0.10 * ammount)));
    },
    (ammount: number) => {
      let itemName = "Ventilador";
      console.log(money);
      setMoney(prev => prev + 50);
      setExpense(prev => prev * (1 + (0.01 * ammount)));
      console.log(money)
    },
  ]
  const [shopItems, setShopItems] = useState<ShopItem[]>([
    
    {
      id: 0,
      name: "Caixa de Som",
      image: "https://img.icons8.com/?size=100&id=9422&format=png&color=000000",
      price: 150,
      ammount: 3,
      description: "Você se torna mais feliz, aumente seu salário atual em 10%",
      effect: itemEffect[0],
    },
    {
      id: 1,
      name: "Ventilador",
      image: "https://img.icons8.com/?size=100&id=41286&format=png&color=000000",
      price: 150,
      ammount: 1,
      description: "Você gosta de um ventilador pouco eficiente, aumente em 5% o seu gasto atual mas ganhe R$300 reais",
      effect: itemEffect[1],
    }
  ]);
  const eventEffect = [
    () => {
      console.log("que dia normal!");
    },
    () => {
      console.log("que dia ruim!");
      setMoney(prev => prev - 100);
      setExpense(prev => prev * 1.1);
    },
    () => {
      console.log("que dia bom!");
      setMoney(prev => prev + 100);
    }
  ]
  const [eventsList, setEventsList] = useState<Event[]>([
    {
      name: "Dia normal",
      context: "Um dia mundano e tranquilo, não aconteceu nada de ruim e nada de bom",
      effect: eventEffect[0]
    },
    {
      name: "Dia ruim",
      context: "Um dia sofrido e injusto, perca R$100 reais e aumente seus custos em 10%",
      effect: eventEffect[1]
    },
    {
      name: "Dia bom",
      context: "Um dia bom e aconchegante, ganhe R$100 reais",
      effect: eventEffect[2]
    }
  ]);
  const [income, setIncome] = useState(100);
  const [expense, setExpense] = useState(20);
  const [money, setMoney] = useState(0);
  const [card, setCard] = useState(0);
  const [day, setDay] = useState(0);


  const handleEvent = () =>{
    let lottery = Math.floor(Math.random() * 10);
    let roll = 0;

    for(let i = lottery; i > 0; i--){
      if(roll <= eventsList.length - 1){
        roll++;
      }
      if(roll > eventsList.length - 1){
        roll = 0;
      }
    }

    console.log(lottery, roll, eventsList[roll]);
    eventsList[roll].effect();
    console.log(money);
  }
  const handleIncome = () =>{
    setMoney(prev => Math.floor(prev + (income - expense)));
    console.log(money, income, expense)
  }

  const handleDay = () =>{
    setDay(day + 1);
    handleEvent();
    handleIncome();

  }

  useEffect(() =>{
    if(money < -500){
      setScreen("gameover");
    }
  },[money])


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
      setShopItems={setShopItems}
      itemEffect={itemEffect} />;
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
    case "gameover":
      return <GameOver onNavigate={setScreen}></GameOver>;
  }

  return (
    <>
    </>
  )
}

export default App
