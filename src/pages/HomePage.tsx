import Hero from '../components/hero-section/Hero';
import Skills from '../components/my-skill-section/Skills';
import Timeline from '../components/time-line-section/Timeline.tsx';
import Projects from '../components/project-section/Projects.tsx';
import ContactMe from '../components/contact-me-section/ContactMe.tsx';
import AboutMe from '../components/about-me-section/AboutMe.tsx';
import Blogs from '../components/my-blogs-section/Blogs.tsx';
import StarsCanvas from '../components/StarsCanvas.tsx';
import Navbar from '../components/navbar/Navbar.tsx';

import { Parallax } from 'react-scroll-parallax';
import Footer from '../components/footer/Footer.tsx';

const HomePage = () => {
  return (
    <div className='text-brightWhite'>
      <Navbar />

      <div className='flex flex-col'>
        <Parallax speed={-50}>
          <div className='px-56' id='heromain'>
            <Hero />
            <StarsCanvas />
          </div>
        </Parallax>

        <div className='relative z-0 bg-[#050816]'>
          <AboutMe />

          <Skills />
          <Timeline />
          <Projects />
          <ContactMe formRef={undefined} />
          <Blogs />
          <Footer />

          <StarsCanvas />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
