"use client"
import { useState } from "react";
import { HandPointing, Info, Trash } from "@phosphor-icons/react";
import { resetThemes, sortTheme } from "./components/themes/sortTheme";
import ModalInfo from "./components/modalInfo";

export default function Home() {
  const [theme, setTheme] = useState<string>('Bem-vindo ao The Mindito')
  const [showInfo, setshowInfo] = useState<boolean>(false)

  const handleClickNewTheme = () => {
    setTheme(sortTheme())
  }

  const handleClickResetThemes = () => {
    setTheme('Bem-vindo ao The Mindito')
    resetThemes()
  }

  const handleClickInfo = () => {
    setshowInfo(!showInfo)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-neutral-900 p-8 relative">
      <p className="text-center text-orange-200 font-black text-xl min-h-40">
        {theme}
      </p>
      <button className="
        flex items-center gap-2 shadow-md shadow-orange-400/50 
        bg-gradient-to-r from-orange-400 to-orange-500 text-white 
        font-bold px-6 py-3 rounded-md" 
        onClick={handleClickNewTheme}
      >
        <HandPointing className="animate-bounce" size={18} weight="fill" /> Sortear tema
      </button>
      <div className="flex gap-3 absolute top-8 right-8">
        <button className="
          flex items-center gap-2 shadow-md shadow-red-700/50 
          bg-gradient-to-r from-red-700 to-red-800 text-white 
          rounded-md px-3 py-1 text-sm font-bold"
          onClick={handleClickResetThemes}
        >
          <Trash size={18} weight="fill" /> Resetar temas
        </button>
        <button className="
          flex items-center gap-2 shadow-md shadow-blue-700/50 
          bg-gradient-to-r from-blue-700 to-blue-800 text-white 
          rounded-md px-3 py-1 text-sm font-bold"
          onClick={handleClickInfo}
        >
          <Info size={18} weight="fill" />
        </button>
      </div>

      {showInfo && <ModalInfo handleClickClose={handleClickInfo}/>}
    </div>
  );
}
