import { useState } from "react";

interface Props{
    day: number,
    hunger: number,
    money: number,
    income: number,
    expense: number,
}

function StatusBar({ day, hunger, money, income, expense }: Props){
  
  return(
    <>
      <div className="flex flex-col flex-wrap rounded-2xl bg-card-light p-5">
        <div className="flex flex-col flex-wrap rounded-3xl bg-card-medium p-5">
            <div className="text-2xl">Dia: </div>
            <div className="text-2xl">{day}</div>
        </div>

        <div className="flex flex-col flex-wrap rounded-3xl bg-card-medium p-5">
            <div className="text-2xl">Fome: </div>
            <div className="text-2xl">{hunger}</div>
        </div>

        <div className="flex flex-col flex-wrap rounded-3xl bg-card-medium p-5">
            <div className="text-2xl">Essência: </div>
            <div className="text-2xl">{money}</div>
        </div>

        <div className="flex flex-col flex-wrap rounded-3xl bg-card-medium p-5">
            <div className="text-2xl">Esperança: </div>
            <div className="text-2xl">{Math.floor(income)}</div>
        </div>

        <div className="flex flex-col flex-wrap rounded-3xl bg-card-medium p-5">
            <div className="text-2xl">Insanidade: </div>
            <div className="text-2xl">{Math.floor(expense)}</div>
        </div>



      </div>
    </>
  )
}

export default StatusBar;