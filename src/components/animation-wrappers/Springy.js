import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Springy = ({ children, speed = '5', magnitude = '5', hover = false}) => {
  const [isHovering, setIsHovering] = useState(true);
  return (
    <motion.div
      className='transition-transform'
      onHoverStart={(e) => {
        if (hover) {
          setIsHovering(true);
        }
      }}
      onHoverEnd={(e) => {
        if (hover) {
          setIsHovering(false);
        }
      }}
      animate={{
        y: isHovering ? [0, `${magnitude}%`, 0] : [0],
      }}
      transition={{
        duration: speed,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        times: [0, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Springy;
