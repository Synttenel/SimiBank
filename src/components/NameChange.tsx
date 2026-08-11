import { useState } from "react";


interface Props{
  setHidden: () => void;
  isVisible: boolean;
  setName: () => void;
}

function NameChange({setHidden, isVisible, setName}: Props){

  const [currentName, setCurrentName] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target.value;
    console.log(element)
    setCurrentName(prev => prev + element);
  }
  const handleUpdateName = () =>{
    setHidden();
  }

  return(
    <>
      <div className="absolute flex flex-col gap-10 justify-end items-end backdrop-blur-2xl z-60 left-1/2 bottom-0 -translate-x-1/2 h-screen w-screen"
      style={{visibility: `${isVisible? "visible": "hidden"}`}}>
        <div className="relative flex flex-wrap gap-5 overflow-auto justify-center items-center z-50 left-1/2 bottom-0 -translate-x-1/2 p-10 rounded-t-3xl h-[95%] w-screen bg-background shadow-2xs">
        <button className="absolute left-5 top-6"
        onClick={() => setHidden()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h1 className="absolute left-15 top-5 text-black font-bold text-2xl underline">Nome</h1>

        <div className="flex flex-col justify-center items-center pt-10 h-full w-full">
            <input type="text" placeholder="Edite seu nome" maxLength={20} onChange={(e) => handleName(e)} className="border-card-light border-2 rounded-3xl text-black p-1 pl-2">
            </input>

        </div>
        
          <button className="absolute bottom-5 bg-card-light rounded-2xl w-5/6 p-3 shadow-2xs hover:bg-card-light/60 cursor-pointer transition-colors duration-200 ease-in hover:shadow-current"
          onClick={() => handleUpdateName()}>Salvar</button>
        </div>
      </div>
    </>
  )
}

export default NameChange;