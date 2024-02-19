import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard.tsx';
import projects from './ProjectData.ts';

const Projects = () => {
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
    <section
      className='min-h-screen relative overflow-hidden mt-12 md:mt-16'
      id='projects'
    >
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        className='flex flex-col items-center justify-center relative'
      >
        <h1 className='text-2xl md:text-3xl font-black text-center md:text-left'>
          <span className='text-center'>RECENT PROJECTS</span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-12'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              techUsed={project.techUsed}
              date={project.date}
            />
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
            duration: 0.5,
            delay: 0.5,
            ease: 'easeIn',
          }}
          className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-secondary z-20'
        />
      </motion.div>
    </section>
  );
};

export default Projects;
