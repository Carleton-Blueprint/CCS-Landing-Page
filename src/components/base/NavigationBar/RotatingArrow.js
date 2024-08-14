import React from 'react';
import { motion } from 'framer-motion';

const RotatingArrow = ({ isHovering, isMobile, handleClick }) => {
  return (
    <motion.svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`inline ml-2 cursor-pointer ${
        isMobile ? 'size-10' : 'size-6'
      }`}
      animate={{ rotate: isHovering ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={'M19.5 8.25l-7.5 7.5-7.5-7.5'}
      />
    </motion.svg>
  );
};

export default RotatingArrow;
