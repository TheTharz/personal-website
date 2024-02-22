import ProjectCard from './ProjectCard.tsx';
import projects from './ProjectData.ts';

const Projects = () => {
  return (
    <section
      className='min-h-screen relative overflow-hidden mt-12 md:mt-16'
      id='projects'
    >
      <div className='flex flex-col items-center justify-center relative '>
        <h1 className='text-2xl md:text-3xl font-black text-center md:text-left'>
          <span className='mb-16 md:text-4xl text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white p-2'>
            RECENT PROJECTS
          </span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-12'>
          {projects.map((project, index) => (
            <div className='transition-transform duration-300 hover:scale-105 overflow-hidden'>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                techUsed={project.techUsed}
                date={project.date}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
