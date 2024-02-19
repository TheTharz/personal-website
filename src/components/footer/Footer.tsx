import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-gray-600 py-4 text-center">
            <p className="text-sm md:text-md">All rights reserved &copy; {new Date().getFullYear()} | Created by Tharindu Imalka</p>
        </footer>
    );
}

export default Footer;
