import React from 'react'


function NavLink({name, href, icon}) {
  return (
    <li className="flex justify-between items-center w-40 h-14 
    px-4 bg-[#474747] ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
      <a href={href} 
        className="flex justify-between items-center w-full text-gray-300" 
        target="_blank"
        rel="noreferrer"
      >
        {name} {icon}
      </a>
    </li>
  )
}

export default NavLink