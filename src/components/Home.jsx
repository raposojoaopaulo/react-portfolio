import React from 'react';
import myphoto from '../assets/photos/myphoto.png';
import jp from '../assets/photos/jp.png';
import { HiArrowNarrowRight } from 'react-icons/hi'; 

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-[#181818] via-[#181818] to-[#101010]"
    >
      <img 
        src={jp} 
        alt="" 
        className='w-auto h-5/6 object-cover opacity-[01.5%] display-none'
      />
      <div className="absolute container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold leading-none sm:text-6xl text-white mt-20">Desenvolvedor  
            <span className="text-[#a460f9]"> Full Stack</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-300">
            Desenvolvedor Full Stack Jr, estudante de Ciências da Computação pela Estácio, com foco em Ruby on Rails, React, Javascript e Typescript. 
            Trabalhei como trainee durante 1 ano e em freelancer em alguns outros projetos.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button 
              className="group text-white bg-[#a460f9] px-6 py-3 my-2 flex items-center rounded-md
              cursor-pointer hover:bg-[#5F08C9] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              Portifólio <span 
                className="ml-2 group-hover:rotate-90 transition duration-300 ease-in-out"           
              ><HiArrowNarrowRight /></span>
            </button>
          </div>
        </div>
        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
          <img
              src={myphoto}
              alt="my profile"
              className="border-b-4"
            />
        </div>
      </div>
{/* 
      <img
          src={jp}
          alt="jp"
          className="absolute top-20 left-0 w-3/6 opacity-10"
        /> */}
    </div>
  )
}

export default Home