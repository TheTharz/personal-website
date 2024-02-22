import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMedium,
  FaStackOverflow,
} from 'react-icons/fa';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on small screens */
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: #fff;
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <a
          style={{ color: 'inherit' }}
          target='_blank'
          href={'https://github.com/TheTharz'}
        >
          <FaGithub size={30} />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: 'inherit' }}
          target='_blank'
          href={'https://twitter.com/the_tharindu'}
        >
          <FaTwitter
            size={30}
            // fill={props.theme === 'dark' ? DarkTheme.body : DarkTheme.text}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: 'inherit' }}
          target='_blank'
          href={'https://medium.com/@tharinduimalka915'}
        >
          <FaMedium
            size={30}
            // fill={props.theme === 'dark' ? DarkTheme.body : DarkTheme.text}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: 'inherit' }}
          target='_blank'
          href={'https://www.linkedin.com/in/tharindu-jayawardana/'}
        >
          <FaLinkedin
            size={30}
            // fill={props.theme === 'dark' ? DarkTheme.body : DarkTheme.text}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: 'inherit' }}
          target='_blank'
          href={'https://stackoverflow.com/users/22557132/tharindu'}
        >
          <FaStackOverflow
            size={30}
            // fill={props.theme === 'dark' ? DarkTheme.body : DarkTheme.text}
          />
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
