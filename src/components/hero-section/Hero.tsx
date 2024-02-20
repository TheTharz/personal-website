import heroImage from '../../assets/photos/hero.png';
import CV from '../../constants/Tharindu_Jayawardhana.pdf';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from('.box', { duration: 1.5, y: 1000, delay: 0 }); // <-- automatically reverted
      gsap.from('.box1', { duration: 1.5, x: -1000, delay: 0.5 }); // <-- automatically reverted
      gsap.from('.box2', { duration: 1.5, y: 1000, delay: 0.7 }); // <-- automatically reverted
      gsap.from('.box3', { duration: 2, y: 1000, delay: 0.7 }); // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <section
      className='flex flex-col md:flex-row items-center justify-around h-screen'
      id='hero'
      ref={container}
    >
      {/* <div className='absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-75'></div> */}
      <div className='flex-1 flex gap-2 flex-col md:w-1/2'>
        <h3 className='text-2xl md:text-4xl font-bold text-white z-10 box1'>
          Hello, it's me
        </h3>
        <h1 className='text-4xl md:text-7xl font-bold text-white relative box1'>
          Tharindu
          <span className='inline-block w-5 h-5 rounded-full bg-blue ml-2'></span>
        </h1>
        <p className='text-base md:text-lg font-light text-gray-300 box2'>
          An enthusiastic explorer in the realm of Computer Engineering, I'm a
          third-year undergraduate with a fervent passion for unraveling the
          mysteries of software engineering and the allure of DevOps. Always
          hungry for new challenges and eager to pave my path in the world of
          technology.
        </p>
        <div className='max-w-screen-md box3'>
          <a
            href={CV}
            rel='noreferrer'
            target='_blank'
            download='Tharindu_Jayawardhana.pdf'
          >
            <button className='smky-btn3 relative bg-purple-500 text-black md:bg-transparent hover:text-[#000000] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-purple-500 rounded-full after:w-full after:bottom-0 after:left-0 md:text-gray-600'>
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className='relative w-full md:w-1/2'>
        <img
          src={heroImage}
          alt='Tharindu'
          className='md:max-h-screen md:w-full md:h-auto z-10'
        />
      </div>
    </section>
  );
};

export default Hero;
