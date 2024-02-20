import React from 'react';
import { Tilt } from 'react-tilt';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <Tilt>
      <div className='relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400 flex flex-col justify-center items-center'>
        <div className='z-10 absolute w-full h-full peer'></div>
        <div className='absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 '></div>
        <div className='absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-64 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500'>
          <p className='w-full h-full flex flex-col justify-center items-center text-black'>
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </p>
        </div>
        <div className='w-full h-full items-center justify-center flex uppercase'>
          <p className='text-center'>{title}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default SkillCard;
