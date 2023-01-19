import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
// import { SiGmail } from 'react-icons/si'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import NavLink from './navlink/NavLink'

function SocialLinks() {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <NavLink 
          name="GitHub"
          href="https://github.com/raposojoaopaulo"
          icon={<FaGithub size={30}/>}
        />
        <NavLink 
          name="Linkedin"
          href="https://www.linkedin.com/in/raposojoaopaulo/"
          icon={<FaLinkedin size={30}/>}
        />
        <NavLink 
          name="Instagram"
          href="https://www.instagram.com/raposojoaop"
          icon={<FaInstagram size={30}/>}
        />        
        {/* <NavLink 
          name="Email"
          href="raposojoaopaulo@gmail.com"
          icon={<SiGmail size={30}/>}
        /> */}
        <NavLink 
          name="Currículo"
          href="https://drive.google.com/file/d/1r7S9MON3MECYFv1YrNPopUS9xiC-6fU7/view?usp=share_link"
          icon={<BsFillPersonLinesFill size={30}/>}
        />
      </ul>
    </div>
  )
}

export default SocialLinks