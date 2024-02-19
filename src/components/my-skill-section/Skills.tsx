import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from './SkillsData';
const Skills: React.FC = () => {
  return (
    <section
      className='flex justify-between items-center flex-col max-h-screen m-4 p-2 gap-12'
      id='skills'
    >
      <h1 className='md:text-4xl text-xl font-extrabold text-center text-gray-900 dark:text-white p-2'>
        What I Am Capable Of?
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center items-center justify-center h-auto text-white'>
        {skillsData.map((skill, index) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
