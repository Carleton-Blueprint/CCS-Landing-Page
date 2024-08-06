import React from 'react';

export default Springy(({children, speed, magnitude}) => {
  return (
    <motion.div
      animate={{
        y: ['0%', '10%', '0%', '-10%', '0%'],
      }}
      transition={{
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      {children}
    </motion.div>
  );
});
