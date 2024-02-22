import { technologies } from '../my-skill-section/Techies.js';

const Technologies = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-8 mx-4 md:mx-16'>
      {technologies.map((technology) => (
        <div
          className='mx-auto border border-gray-200 shadow-lg rounded-lg overflow-hidden md:w-16 md:h-16 lg:w-20 lg:h-20 w-12 h-12'
          key={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-full h-full object-cover'
          />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
