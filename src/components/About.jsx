import React from 'react';

function About() {
  return (
    <div 
      name="about"
      className="w-full h-screen bg-gradient-to-b from-[#181818] via-[#181818] to-[#101010]
      text-white"
    >
      <div 
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline">
            Sobre mim
          </p>
          <br />
          <p
            className="text-lg mt-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eos nulla labore odio voluptatem necessitatibus eum id quo, 
            tenetur ipsam ullam cupiditate ut! Ea iure similique necessitatibus 
            omnis veniam repellat, amet recusandae repudiandae dolores sed saepe 
            repellendus, odit fuga minima inventore voluptate impedit cum nihil. 
            Commodi nisi officiis quibusdam assumenda distinctio.
          </p>
          <br />
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Architecto eius ullam nemo quod doloremque esse obcaecati amet fugit modi adipisci, 
            natus sunt necessitatibus accusamus, ratione veritatis a, illum corrupti quae.
          </p>
        </div>
      </div>
    </div>
  )
};

export default About;