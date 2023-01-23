import React from 'react';
import SkillCard from './SkillCard';

function Skills() {

  const skills = [
    {
      url: "https://cdn.svgporn.com/logos/html-5.svg",
      name: "HTML5",
    },
    {
      url: "https://cdn.svgporn.com/logos/css-3.svg",
      name: "CSS3",
    },
    {
      url: "https://cdn.svgporn.com/logos/javascript.svg",
      name: "JavaScript",
    },
    {
      url: "https://cdn.svgporn.com/logos/typescript-icon.svg",
      name: "Typescript",
    },
    {
      url: "https://cdn.svgporn.com/logos/react.svg",
      name: "React",
    },
    {
      url: "https://cdn.svgporn.com/logos/ruby.svg",
      name: "Ruby"
    },
    {
      url: "https://cdn.svgporn.com/logos/rails.svg",
      name: "Ruby on Rails"
    },
    {
      url: "https://cdn.svgporn.com/logos/php.svg",
      name: "PHP",
    },
    {
      url: "https://cdn.svgporn.com/logos/laravel.svg",
      name: "Laravel",
    },    
    {
      url: "https://cdn.svgporn.com/logos/postgresql.svg",
      name: "PostgreSQL"
    },
    {
      url: "https://cdn.svgporn.com/logos/git-icon.svg",
      name: "Git"
    },
    {
      url: "https://raw.githubusercontent.com/badgen/badgen-icons/e0a409fcd52fe3d0f0152919dbefc87621036854/icons/github.svg",
      name: "GitHub"
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-[#181818] via-[#181818] to-[#101010] 
      w-full text-white md:h-screen"
    >     
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
        w-full h-full min-w-[70%] max-h-max"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#a460f9]">
            Portfólio
          </p>
          <p className="py-6">
            Algumas das tecnologias que eu uso no meu dia a dia.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 place-content-center sm:grid-cols-3 gap-8
        text-center py-8 px-12 sm:px-2">
          { skills.map((skill, index) => (
            <SkillCard 
              key={index} 
              url={skill.url} 
              name={skill.name} 
            />
          ))
          }
        </div>
      </div>
    </div>
  )
};

export default Skills;


