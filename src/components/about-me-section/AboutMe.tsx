import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMedium,
  FaStackOverflow,
} from 'react-icons/fa';

const AboutMe = () => {
  const openLinkInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section
      className='min-h-screen flex flex-col justify-center items-center gap-12 px-8 md:px-8 lg:px-12 xl:px-24'
      id='about'
    >
      <h1 className='mb-2 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white p-2'>
        ABOUT ME
      </h1>
      <p className='text-sm md:text-md lg:text-lg text-neutral-300 leading-relaxed relative z-10 text-center'>
        My academic journey has been focused on software engineering, and I'm
        currently exploring the exciting field of DevOps. Alongside technical
        skills, I also place great emphasis on developing soft skills,
        understanding the importance of effective communication, teamwork, and
        problem-solving. I'm deeply passionate about technology and its
        potential to transform lives and businesses. Constantly seeking growth
        and learning, I actively engage in expanding my knowledge and staying
        updated with the latest advancements in the field. Outside of academics
        and technology, I find joy in various hobbies and interests. If I am not
        engaged in coding, you can find me playing chess or watching a movie. I
        am driven by a desire to make a meaningful impact in the world of
        technology and beyond. If you'd like to connect or discuss
        opportunities, feel free to reach out to me.
      </p>
      {/* Connect with me icons */}
      <div className='flex flex-wrap justify-center gap-4 md:gap-8 mt-8'>
        <FaLinkedin
          size={32}
          color='#2867B2'
          onClick={() =>
            openLinkInNewTab(
              'https://www.linkedin.com/in/tharindu-jayawardana/'
            )
          }
        />
        <FaTwitter
          size={32}
          color='#1DA1F2'
          onClick={() => openLinkInNewTab('https://twitter.com/the_tharindu')}
        />
        <FaGithub
          size={32}
          color='#333'
          onClick={() => openLinkInNewTab('https://github.com/TheTharz')}
        />
        <FaMedium
          size={32}
          color='#ffffff'
          onClick={() =>
            openLinkInNewTab('https://medium.com/@tharinduimalka915')
          }
        />
        <FaStackOverflow
          size={32}
          color='#F48024'
          onClick={() =>
            openLinkInNewTab(
              'https://stackoverflow.com/users/22557132/tharindu'
            )
          }
        />
        {/*<FaInstagram size={32} color="#E4405F" onClick={() => openLinkInNewTab('https://www.instagram.com/your_instagram_username')} />*/}
      </div>
    </section>
  );
};

export default AboutMe;
