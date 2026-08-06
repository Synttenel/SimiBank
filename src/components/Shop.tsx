import { useState } from "react";


function Shop(){

  const [shopItems, setShopItems] = useState([
    {
      name: "Caixa de Som",
      image: "https://img.icons8.com/?size=100&id=40886&format=png&color=000000",
      preco: 150,
      efeito: "Diminui a chance de receber efeitos negativos"
    },
    {
      name: "Celular",
      image: "https://img.icons8.com/?size=100&id=40886&format=png&color=000000",
      preco: 200,
      efeito: "Diminui o custo de vida, porém aumenta a chance de receber efeitos negativos"
    },
    {
      name: "Video Game",
      image: "https://img.icons8.com/?size=100&id=40886&format=png&color=000000",
      preco: 300,
      efeito: ""
    }
  ])

  return(
    <>
      <div className="absolute flex flex-col gap-10 justify-end items-end backdrop-blur-2xl z-60 left-1/2 bottom-0 -translate-x-1/2 h-screen w-screen">
        <div className="relative flex flex-wrap gap-5 overflow-auto justify-center items-center z-50 left-1/2 bottom-0 -translate-x-1/2 p-10 rounded-t-3xl h-[95%] w-screen bg-background shadow-2xs">
          {/*<!-- License: CC Attribution. Made by tetrisly: https://tetrisly.gumroad.com/l/freeicons -->*/}
          <button className="absolute right-5 top-5 bg-white rounded-2xl hover:bg-gray-300/80 cursor-pointer transition-colors duration-200 ease-in"
          >
            <svg fill="#0000000" width="35px" height="35px" viewBox="0 0 1.05 1.05" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="m0.587 0.525 0.232 -0.232a0.044 0.044 0 1 0 -0.062 -0.062L0.525 0.463 0.293 0.232a0.044 0.044 0 1 0 -0.062 0.062L0.463 0.525l-0.232 0.232a0.044 0.044 0 1 0 0.062 0.062L0.525 0.587l0.232 0.232a0.044 0.044 0 0 0 0.062 0 0.044 0.044 0 0 0 0 -0.062z"/>
            </svg>
          </button>
          <h1 className="absolute left-5 top-5 text-black font-bold text-2xl underline">Loja</h1>
          
            {shopItems.map((shopItem, _) => (
              <div className="flex flex-col justify-center items-center gap-5 mt-20 bg-card-light p-5  rounded-2xl min-sm: shadow-2xs" key={_}>
                <img src={shopItem.image}/>
                <h1>{shopItem.name}</h1>
                <h1>{shopItem.preco}</h1>
                <button className="bottom-5 bg-card-dark rounded-2xl w-50 p-3 shadow-2xs hover:bg-card-medium/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
                >Adicionar ao carrinho</button>
              </div>
            ))}
            
          <div className="sticky flex justify-between items-center bottom-0 w-11/12 mt-10">
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