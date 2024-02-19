import BallCanvas from '../my-skill-section/Ball.jsx';

import { technologies } from '../my-skill-section/Techies.js';

const Technologies = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-8 '>
      {technologies.map((technology: any) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
