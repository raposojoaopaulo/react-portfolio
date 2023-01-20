import React from 'react'
import Blogstrap from '../assets/portfolio/Blogstrap.png'
import CityWaterNow from '../assets/portfolio/CityWaterNow.png'
import Costs from '../assets/portfolio/Blogstrap.png'
import EventManager from '../assets/portfolio/Blogstrap.png'
import ExpaseTracker from '../assets/portfolio/Blogstrap.png'
import humanityQuestiosApp from '../assets/portfolio/Blogstrap.png'
import MultiFormStep from '../assets/portfolio/MultiFormStep.png'
import PhotoGalery from '../assets/portfolio/Blogstrap.png'
import RailsRecipes from '../assets/portfolio/Blogstrap.png'

function Portfolio() {

  const projects = [
    {
      name: 'Blogstrap',
      image: Blogstrap,
      description: 'Blogstrap é um blog feito com Ruby on Rails, bootstrap, html e css. O projeto foi feito para praticar o uso do bootstrap e para aprender a utilizar o git e o github.',
      link: '',
    },
    {
      name: 'City Water Now',
      image: CityWaterNow,
      description: 'City Water Now é um projeto de um site com a temperatura e condições climáticas de uma determinada cidade. O projeto foi feito para praticar typescript e consumir uma API externa.',
      link: '',
    },
  ]

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-[#181818] via-[#181818] to-[#101010]">
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <button>
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={Blogstrap} alt="Blogstrap" className="w-full h-full object-cover" />
              <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py- text-white duration-100 hover:bg-blue-600">
                <button className="text-sm">Codigo</button>
              </div>
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-slate-700">Nome do Projeto</h2>

              <p class="mt-1 text-sm text-slate-400">City Water Now é um projeto de um site com a temperatura e condições climáticas de uma determinada cidade. O projeto foi feito para praticar typescript e consumir uma API externa.</p>

              <div className="mt-3 flex items-end justify-between">
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <button className="text-sm">Código</button>
                </div>
              </div>
            </div>
          </button>
        </article>
      </div>
    </div>
  )
}

export default Portfolio