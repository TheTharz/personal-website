import React, { useEffect } from 'react';
import SkillCard from './SkillCard';
import { skillsData } from './SkillsData';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Technologies from '../time-line-section/Technologies';
gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section
      className='flex justify-between items-center flex-col h-auto m-4 p-2 gap-12  md:mb-12'
      id='skills'
      ref={container}
    >
      <h1 className='md:text-4xl text-xl font-extrabold text-center text-gray-900 dark:text-white p-2'>
        WHAT AM I CAPABLE OF?
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center items-center justify-center h-auto text-white '>
        {skillsData.map((skill, index) => (
          <div className=''>
            <SkillCard key={index} title={skill.title} skills={skill.skills} />
          </div>
        ))}
      </div>
      <h1 className='md:text-4xl text-xl font-extrabold text-center text-gray-900 dark:text-white p-2'>
        TECH STACK & TOOLS
      </h1>
      <Technologies />
    </section>
  );
};

export default Skills;
