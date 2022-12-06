import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logojpr from '../assets/logo/logojpr.svg'; 

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links= [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Sobre",
    },
    {
      id: 3,
      link:"Portfólio",
    },
    {
      id: 4,
      link: "Tecnologias",
    },
    {
      id: 5,
      link: "Contato",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 
    px-4 text-white bg-slate-900 fixed">
      <div>
        <img src={logojpr} alt="logo-jpr" className="w-40 ml-2" />
      </div>
      <ul className="hidden md:flex">
        { links.map(({id, link}) => (
          <li key={id} className="px-4 cursor-pointer font-medium
          text-gray-300 hover:scale-110 duration-200">
            {link}
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} 
      className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
        { nav ? <FaTimes className="" size={30} /> : <FaBars className="" size={30}/> }  
      </div>
      { nav && (
        <ul className="flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 to-slate-700
        text-gray-300">
          { links.map(({id, link}) => (
            <li key={id} className="px-4 cursor-pointer font-medium
            py-6 hover:scale-110 duration-200">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default Navbar;
