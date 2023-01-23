import React from 'react';

function Footer() {
  return (
    <div className="bg-black text-gray-300">
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1 mb-4 pt-4">
          <hr className="border-gray-400 pt-2 mb-2" />
            Copyright © <span id="get-current-year">2023</span><p className="text-blueGray-500 hover:text-[#a460f9]"> Created by
            <a href="https://github.com/raposojoaopaulo/react-portfolio" className="text-blueGray-500 hover:text-[#a460f9]]"
              target="_blank"
              rel="noreferrer"> João Paulo Raposo</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer