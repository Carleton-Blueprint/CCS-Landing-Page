import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

//isHovering is a variable that is set to true or false depending on if the Springy
//component is being hovered over.
//on hover, the animation is set to move up and down the desired magnitude and speed
//while not hovering, the animation is set to stay in its original position

//the whileHover feature in framer-motion was not used because once hover ends the component
//stays in the position it was when the hover ended and does not revert to its original position

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
