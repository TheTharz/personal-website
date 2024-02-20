import { useInView, useAnimation, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  techUsed: string[];
  date: string;
}

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageSrc,
  techUsed,
  date,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.div
      className='max-w-80 rounded-3xl overflow-hidden shadow-lg bg-cardBlue z-20 h-fit  cursor-pointer  '
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControls}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
    >
      <img className='w-full h-64 object-cover' src={imageSrc} alt={title} />
      <div className='px-6 py-4 '>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <span className='inline-block rounded-full py-1 text-sm font-semibold text-gray-700'>
          {date}
        </span>

        <p className='text-gray-700 text-base'>{description}</p>
      </div>
      <div className='px-6 py-4'>
        {techUsed.map((tech, index) => (
          <span
            key={index}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
          >
            {tech}
          </span>
        ))}
      </div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{
          duration: 1,
          delay: 0,
          ease: 'easeIn',
        }}
        className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cardBlue to-indigo-900 z-20'
      />
    </motion.div>
  );
};

export default ProjectCard;
