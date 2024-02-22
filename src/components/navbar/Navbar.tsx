import Draggable from 'react-draggable';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <Draggable>
      <nav
        className='bg-white border-gray-200 dark:bg-gray-900 rounded-full hidden md:block'
        style={{
          border: '1px solid #8A2387', // Add a solid border with the desired color
        }}
      >
        <div className='w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 rounded-lg'>
          <div className='hidden w-fit md:block md:w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <Link
                  to='hero'
                  offset={-2000}
                  smooth={true}
                  duration={500}
                  className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 cursor-pointer'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='about'
                  smooth={true}
                  duration={500}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='skills'
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to='timeline'
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  to='projects'
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='blogs'
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer'
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Draggable>
  );
};

export default Navbar;
