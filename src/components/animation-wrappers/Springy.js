import React from 'react';
import { motion } from 'framer-motion';

const Springy = ({ children, speed = '5', magnitude = '5', style = '' }) => {
  const getAnimation = (magnitude) => {
    return { y: [0, `${magnitude}%`, 0] };
  };
  return (
    <motion.div
      animate={getAnimation(magnitude)}
      transition={{
        duration: speed,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        times: [0, 0.5, 1],
      }}
      className={style}
    >
      {children}
    </motion.div>
  );
};

export default Springy;
