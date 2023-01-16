import React from 'react'
import myphoto from '../assets/photos/myphoto.png'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div 
      name="home"
      className="h-screen w-full bg-gradient-to-b from-[#181818] via-[#181818] to-[#101010] text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center 
          h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mr-8">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Desenvolvedor Full Stack
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
          Desenvolvedor Full Stack Jr, estudante de Ciências da Computação pela Estácio, com foco em Ruby on Rails, React, Javascript e Typescript. 
          Trabalhei como trainee durante 1 ano e em freelancer em alguns outros projetos.
          </p>
          <div>
            <button>
              Portifólio <span><HiArrowNarrowRight /></span>
            </button>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center mb-10 justify-center px-4 w-full md:flex-row">
          <div className="h-80 w-80 rounded-full bg-[#a460f9] absolute">
          <img 
            src={myphoto} 
            alt="Minha foto de perfil"
            className="rounded-2 grayscale" 
          />  
          </div>                  
        </div>
      </div>
    </div>
  )
}

export default Home