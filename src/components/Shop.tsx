import { useState } from "react";
import type {Screen} from './types'
import type { ShopItem } from "./shopitems";

import type { Dispatch } from "react";
import type { SetStateAction } from "react";

interface Props{
  onNavigate: (screen: Screen) => void;
  money: number,
  setMoney: Dispatch<SetStateAction<number>>
  items: ShopItem[];
  setItems: Dispatch<SetStateAction<ShopItem[]>>
  shopItems: ShopItem[];
  setShopItems: Dispatch<SetStateAction<ShopItem[]>>
  itemEffect: (() => void)[];

}


function Shop({onNavigate, money, setMoney, items, setItems, shopItems, setShopItems, itemEffect}: Props){

  console.log(items);
  console.log(shopItems);

  const handleBuyItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const element = e.target.id;
    let itemPrice = 0;
    let itemAmmount = 0;
    let itemIndex = "";
    Object.entries(shopItems).forEach((value) => {
      console.log(value[1].name);
      if(value[1].name === element){
        itemPrice = value[1].price;
        itemAmmount = value[1].ammount;
        itemIndex = value[0];
      }
    })
    console.log(itemPrice, itemIndex, shopItems[parseInt(itemIndex)]);
    if(itemAmmount <= 0){
      alert("O item está fora de estoque");
      return;
    }
    if(money < itemPrice){
      alert(`Não há dinheiro suficiente para concluir a transação, ainda faltam R$${itemPrice - money}.`);
      return;
    }
    else if(money >= itemPrice){
      const saveItem = shopItems[parseInt(itemIndex)];

      setMoney(money - itemPrice);

      for(let i = 0; i < items.length; i++){
        if(items[i].name === element){
          items[i].ammount++;
          saveItem.ammount--;
          alert("Item Comprado com sucesso");
          return;
        }
      }
      
      
      setItems(prev => [...prev,{
        ...saveItem,
        ammount: 1,
        effect: itemEffect[saveItem.id]

      }]);
      saveItem.ammount--;
      alert("Item Comprado com sucesso");
      
       

      
    }
    
    console.log(element);
  }


  return(
    <>
      <div className="flex flex-col relative justify-between items-start bg-card-light p-5 w-screen h-42 rounded-b-2xl min-sm: shadow-2xs"></div>
      <div className="absolute flex flex-col gap-10 justify-end items-end backdrop-blur-2xl z-60 left-1/2 bottom-0 -translate-x-1/2 h-screen w-screen">
        <div className="relative flex flex-wrap gap-5 overflow-auto justify-center items-center z-50 left-1/2 bottom-0 -translate-x-1/2 p-10 rounded-t-3xl h-[95%] w-screen bg-background shadow-2xs">
          {/*<!-- License: CC Attribution. Made by tetrisly: https://tetrisly.gumroad.com/l/freeicons -->*/}
          
          <button className="absolute right-5 top-5 bg-white rounded-2xl hover:bg-gray-300/80 cursor-pointer transition-colors duration-200 ease-in"
          onClick={() => onNavigate("menu")}>
            <svg fill="#0000000" width="35px" height="35px" viewBox="0 0 1.05 1.05" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="m0.587 0.525 0.232 -0.232a0.044 0.044 0 1 0 -0.062 -0.062L0.525 0.463 0.293 0.232a0.044 0.044 0 1 0 -0.062 0.062L0.463 0.525l-0.232 0.232a0.044 0.044 0 1 0 0.062 0.062L0.525 0.587l0.232 0.232a0.044 0.044 0 0 0 0.062 0 0.044 0.044 0 0 0 0 -0.062z"/>
            </svg>
          </button>
          
          <h1 className="absolute left-5 top-5 text-black font-bold text-2xl underline">Loja</h1>
          
            {shopItems.map((shopItem, _) => (
              <div className="flex flex-col justify-center items-center gap-5 mt-20 bg-card-light p-5  rounded-2xl min-sm: shadow-2xs" key={_}>
                <img src={shopItem.image}/>
                <h1 className="text-2xl font-bold">{shopItem.name}</h1>
                <h2 className="text-1xl">Disponível: {shopItem.ammount}</h2>
                <h2 className="text-1xl">R${shopItem.price}</h2>
                <button className="bottom-5 bg-card-dark rounded-2xl w-50 p-3 shadow-2xs hover:bg-card-medium/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
                id={shopItem.name}
                onClick={(e) => handleBuyItem(e)}>Comprar</button>
              </div>
            ))}
            
          <div className="sticky flex justify-between items-center bottom-0 p-2 ">
            <h1 className="font-bold bg-card-light rounded-l-2xl w-5/6 h-[3lh] p-3 shadow-2xs text-center">Items no carrinho:</h1>
            <button className="bg-card-light border-l-2 rounded-r-2xl w-5/6 h-[3lh] p-3 shadow-2xs hover:bg-card-light/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
              >Ir para Checkout</button>
          </div>  
        </div>
      </div>
    </>
  )
}

export default Shop;