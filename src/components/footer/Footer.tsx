import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='text-gray-600 py-4 text-center md:text-sm'>
      <p className='text-xs md:text-sm'>
        All rights reserved &copy; {new Date().getFullYear()} | Created by
        Tharindu Imalka
      </p>
    </footer>
  );
};

export default Footer;
