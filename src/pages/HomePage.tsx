import { useEffect, useState } from 'react';
import Hero from '../components/hero-section/Hero.tsx';
import Skills from '../components/my-skill-section/Skills';
import Timeline from '../components/time-line-section/Timeline.tsx';
import Projects from '../components/project-section/Projects.tsx';
import ContactMe from '../components/contact-me-section/ContactMe.tsx';
import AboutMe from '../components/about-me-section/AboutMe.tsx';
import Blogs from '../components/my-blogs-section/Blogs.tsx';

import { Parallax } from 'react-scroll-parallax';
import Footer from '../components/footer/Footer.tsx';
import PreLoad from '../components/preload/PreLoad.tsx';
import ParticlesBackground from '../components/background/ParticlesBackground.jsx';
import Navbar from '../components/navbar/Navbar.tsx';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const checkLoadingStatus = setInterval(() => {
      if (document.readyState === 'complete') {
        handleLoading(); // Call handleLoading if the document is fully loaded
        clearInterval(checkLoadingStatus); // Clear the interval once the document is fully loaded
      }
    }, 2000); // Check loading status every 1 second

    return () => clearInterval(checkLoadingStatus); // Cleanup the interval on component unmount
  }, []);

  return isLoading ? (
    <PreLoad />
  ) : (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 flex justify-center'>
        <Navbar />
      </div>

      <div className='text-brightWhite' id='homepage'>
        <Parallax speed={-50}>
          <ParticlesBackground />

          <div className='px-8 md:px-28 lg:px-56 bg-[#050816]' id='heromain'>
            <Hero />
          </div>
        </Parallax>

        <div className='flex flex-col'>
          <div className='relative z-20 bg-[#050816]'>
            <AboutMe />

            <Skills />

            <Timeline />

            <Projects />
            <ContactMe />

            <Blogs />

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
