import { useState } from "react";

interface Props{

}

function InsideInterface({ }: Props){

  const [interfaceVis, setInterfaceVis] = useState(true);

  return(
    <>
      <div className="w-[90%] h-[90%] flex gap-5 justify-center items-center p-5  absolute left-1/2 top-1/2 -translate-1/2 bg-black/30 backdrop-blur-sm"
      style={{opacity: interfaceVis?"1.0":"0.3"}}>
        <img className="absolute right-5 top-5" src="https://img.icons8.com/?size=50&id=78831&format=png&color=ffffff"
        onClick={() => interfaceVis?setInterfaceVis(false): setInterfaceVis(true)}/>
        <div className="w-[20%] h-[20%] bg-card-dark rounded-2xl p-5 text-center text-2xl">
            Loja
        </div>
        <div className="w-[20%] h-[20%] bg-card-dark rounded-2xl p-5 text-center text-2xl">
            Cozinha
        </div>
        <div className="w-[20%] h-[20%] bg-card-dark rounded-2xl p-5 text-center text-2xl">
            Itens
        </div>
        <div className="w-[20%] h-[20%] bg-card-dark rounded-2xl p-5 text-center text-2xl">
            ???
        </div>
        <div className="w-[20%] h-[20%] bg-card-dark rounded-2xl p-5 text-center text-2xl">
            
        </div>
      </div>
    </>
  )
}

export default InsideInterface;