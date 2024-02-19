import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faCode,
  faClock,
  faProjectDiagram,
  faEnvelope,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='flex items-center absolute h-screen'>
      <div
        className='fixed right-5 z-20 flex flex-col items-center justify-center border-2 p-2 md:p-4 h-fit gap-2 bg-[#050816]'
        style={{
          borderImage:
            'linear-gradient(45deg, rgba(151, 65, 252, 1), rgba(208, 114, 214, 1))',
          borderImageSlice: 1,
          boxShadow: 'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
        }}
      >
        <Link
          to='hero'
          spy={true}
          smooth={true}
          duration={1000}
          className='cursor-pointer mb-2'
          offset={-2000} // Adjust the offset as needed
          title='Home'
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link
          to='about'
          spy={true}
          smooth={true}
          duration={500}
          className='cursor-pointer mb-2'
          title='About'
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link
          to='skills'
          spy={true}
          smooth={true}
          duration={500}
          className='cursor-pointer mb-2'
          title='Skills'
        >
          <FontAwesomeIcon icon={faCode} />
        </Link>
        <Link
          to='timeline'
          spy={true}
          smooth={true}
          duration={500}
          className='cursor-pointer mb-2'
          title='Timeline'
        >
          <FontAwesomeIcon icon={faClock} />
        </Link>
        <Link
          to='projects'
          spy={true}
          smooth={true}
          duration={500}
          className='cursor-pointer mb-2'
          title='Projects'
        >
          <FontAwesomeIcon icon={faProjectDiagram} />
        </Link>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
          className='cursor-pointer mb-2'
          title='Contact'
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link
          to='blogs'
          spy={true}
          smooth={true}
          duration={500}
          className='cursor-pointer mb-2'
          title='Blogs'
        >
          <FontAwesomeIcon icon={faNewspaper} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
