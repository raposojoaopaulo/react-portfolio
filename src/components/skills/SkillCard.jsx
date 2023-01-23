import React from 'react';

function SkillCard({mykey, url, name}) {
  return (
    <div key={mykey}
      className="shadow-md hover:scale-105 duration-300 py-2 rounded-lg
      content-center items-center"
    >
      <img 
        src={url}
        alt={name} 
        className='h-[100px] mx-auto'
      />
      <p className="text-slate-300 mt-4">{name}</p>
    </div>
  )
};

export default SkillCard;