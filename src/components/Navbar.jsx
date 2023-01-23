import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logojpr from '../assets/logo/logojpr.svg'; 
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links= [
    {
      id: 1,
      link: "Home",
      target: "home",
    },
    {
      id: 2,
      link: "Sobre",
      target: "about",
    },
    {
      id: 3,
      link:"Portfólio",
      target: "portfolio",
    },
    {
      id: 4,
      link: "Habilidades",
      target: "skills",
    },
  ];

  return (
    <nav className="flex justify-around py-3 bg-gradient-to-b from-[#181818] to-[#0F0F0F]
    backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-10">


    <div className="flex items-center">
      <Link to={"home"} smooth duration={500}>
        <button className="cursor-pointer">
          <img className="h-12 object-cover"
            src={logojpr} alt="logo-jpr" />
        </button>
      </Link>
    </div>


    <div className="items-center hidden space-x-8 lg:flex">
      { links.map(({id, link, target}) => (
        <button key={id} className="flex text-gray-300 hover:text-[#a460f9]
          cursor-pointer transition-colors duration-300">
          <Link to={target} smooth duration={500}>{link}</Link>
        </button>
      ))}
    </div>


    <div className="flex items-center space-x-5">
      <Link to={"contact"} smooth duration={500}>
        <button 
        className="group text-white bg-[#a460f9] px-6 py-3 my-2 flex items-center rounded-md
        cursor-pointer hover:bg-[#5F08C9] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
        >
          Contato 
        </button>
      </Link>
    </div>

    <div onClick={() => setNav(!nav)} 
      className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden mt-4">
        { nav ? <FaTimes className="" size={30} /> : <FaBars className="" size={30}/> }  
      </div>
      { nav && (
        <ul className="flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#181818] to-[#0F0F0F]
        text-gray-300">
          { links.map(({id, link, target}) => (
            <li key={id} className="px-4 cursor-pointer font-medium
            py-6 hover:scale-110 duration-200">
              <Link 
                onClick={() => setNav(!nav)}
                to={target} 
                smooth duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
};

export default Navbar;
