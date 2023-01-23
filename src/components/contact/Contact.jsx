import React from 'react';

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-[#181818] via-[#181818] to-[#101010] p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-[#a460f9]">
            Contato
          </p>
          <p className="py-6">Caso queira falar comigo, pode me enviar uma mensagem</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/f9a1b73b-de40-4a99-b425-de98a4f229d3"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-[#a460f9] px-6 py-3 my-8 mx-auto flex 
            items-center rounded-md hover:bg-[#5F08C9] hover:scale-110 duration-300">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;