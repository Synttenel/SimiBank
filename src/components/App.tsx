import { useState } from 'react'

import './App.css'

import Start from "./Start"
import ProfileBar from "./ProfileBar"
import CurrencyBar from './CurrencyBar'
import CardBar from './CardBar'
import NavBar from './NavBar'
import UserCustom from './UserCustom'
import Shop from './Shop'


function App() {

  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");


  
  if(!started){
    return (<><Start onStart={() => setStarted(true)} /></>)
  }

  return (
    <>
      <Shop />
      <div className="flex flex-col gap-10 justify-top items-center h-screen w-screen bg-background">
        <ProfileBar />

        <CurrencyBar />

        <CardBar />

      </div>

      <NavBar />
    </>
  )
}

export default App
