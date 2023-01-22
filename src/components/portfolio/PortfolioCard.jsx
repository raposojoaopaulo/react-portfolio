import React from 'react'

function PortfolioCard({mykey, name, image, description, link}) {
  return (
    // <>
    // <div key={mykey} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
    //       <div>
    //         <div className="relative flex items-end overflow-hidden rounded-xl">
    //           <img src={image} alt="Blogstrap" className="w-full h-full object-cover" />
    //         </div>

    //         <div className="mt-1 p-2">
    //           <h2 className="text-slate-700">{name}</h2>

    //           <p className="mt-1 text-sm text-slate-400">{description}</p>

    //           <div className="mt-3 flex items-end justify-between">
    //             <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
    //               <a href={link}         
    //                 target="_blank"
    //                 rel="noreferrer">
    //                <button className="text-sm">Código</button>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     </>

      <div key={mykey} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
        <div className="relative flex items-end overflow-hidden rounded-xl shadow-lg shadow-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-1 p-2">
          <h2 className="text-slate-700">{name}</h2>

          <p className="mt-1 text-sm text-slate-400">{description}</p>

          <div className="mt-3 flex items-end bottom-0 left-0">
            <div className="flex items-center space-x-1.5 rounded-lg bg-[#a460f9] px-4 py-1.5 text-white duration-100 hover:bg-[#5F08C9]">
              <a href={link}         
              target="_blank"
              rel="noreferrer">
                <button className="text-sm">Código</button>
              </a>
            </div>
          </div>
        </div>        
      </div>
  )
}

export default PortfolioCard