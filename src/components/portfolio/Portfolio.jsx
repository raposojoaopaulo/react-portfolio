import React from 'react'
import Blogstrap from '../../assets/portfolio/Blogstrap.png'
import CityWaterNow from '../../assets/portfolio/CityWaterNow.png'
import Costs from '../../assets/portfolio/Costs.png'
import EventManager from '../../assets/portfolio/EventManager.png'
import ExpaseTracker from '../../assets/portfolio/ExpaseTracker.png'
import HumanityQuestionsApp from '../../assets/portfolio/HumanityQuestionsApp.png'
import MultiFormStep from '../../assets/portfolio/MultiFormStep.png'
import PhotoGalery from '../../assets/portfolio/PhotoGalery.png'
import RailsRecipes from '../../assets/portfolio/RailsRecipes.png'
import PortfolioCard from './PortfolioCard'


function Portfolio() {

  const projects = [
    {
      name: 'Blogstrap',
      image: Blogstrap,
      description: 'Blogstrap é um blog feito com Ruby on Rails, bootstrap, html e css. O projeto foi feito para praticar o uso do bootstrap e para aprender a utilizar o git e o github.',
      link: 'https://github.com/raposojoaopaulo/Blogstrap-2-Backup',
    },
    {
      name: 'City Water Now',
      image: CityWaterNow,
      description: 'City Water Now é um projeto de um site com a temperatura e condições climáticas de uma determinada cidade. O projeto foi feito para praticar typescript e consumir uma API externa.',
      link: 'https://github.com/raposojoaopaulo/city-weather-now',
    },
    {
      name: 'Costs',
      image: Costs,
      description: 'Costs é um projeto de um site para gerenciar gastos. O projeto foi feito para praticar o uso do React e o uso de hooks.',
      link: 'https://github.com/raposojoaopaulo/Costs',
    },
    {
      name: 'Event Manager',
      image: EventManager,
      description: 'Event Manager é um projeto de um site para gerenciar eventos. Feito em Rails e React.',
      link: 'https://github.com/raposojoaopaulo/Event-Manager-Rails-API-React',
    },
    {
      name: 'Expanse Tracker',
      image: ExpaseTracker,
      description: 'Expanse Tracker é um projeto de um site para gerenciar renda. O projeto foi feito para praticar o uso do React e o uso de hooks.',
      link: 'https://github.com/raposojoaopaulo/expense_tracker',
    },
    {
      name: 'Humanity Questions App',
      image: HumanityQuestionsApp,
      description: 'Humanity Questions App é um projeto onde você envia as maiores questões da humanidade. Foi feito em Rails e React para praticar backend e frontend.',
      link: 'https://github.com/raposojoaopaulo/Humanity-s-Biggest-Questions-App',
    },
    {
      name: 'Multi Form Step',
      image: MultiFormStep,
      description: 'Multi Form Step é um projeto de um formalário com vários passos. O projeto foi feito para praticar o uso do React e seus hooks.',
      link: 'https://github.com/raposojoaopaulo/React-multi-step-form',
    },
    {
      name: 'Photo Galery',
      image: PhotoGalery,
      description: 'Photo Galery é um projeto de uma galeria de imagem. Feito para praticar o React e a integração com o Firebase.',
      link: 'https://github.com/raposojoaopaulo/my-gallery',
    },
    {
      name: 'Rails Recipes',
      image: RailsRecipes,
      description: 'Rails Recipes é um projeto de um site para gerenciar gastos. Projeto foi feito para praticar Ruby on Rails, React e seus hooks.',
      link: 'https://github.com/raposojoaopaulo/Recipes-app-with-rails-and-react',	
    },  
  ]

  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-[#181818] via-[#181818] to-[#101010] w-full text-white md:h-screen"
    >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full min-w-[70%] max-h-max">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-[#a460f9]">
          Portfólio
        </p>
        <p className="py-6">
          Alguns dos meus projetos pessoais e trabalhos desenvolvidos durante a faculdade.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-12 sm:px-0">
        { projects.map((project, index) => (
          <PortfolioCard 
          key={index}
          mykey={index}
          name={project.name}
          image={project.image}
          description={project.description}
          link={project.link}
          />    
        ))}     
      </div>
    </div>
  </div>
  )
}

export default Portfolio