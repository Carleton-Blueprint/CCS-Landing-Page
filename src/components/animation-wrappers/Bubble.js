import React from 'react';
import { motion } from 'framer-motion';
const Bubble = ({
  renderObjects,
  wrapperClass,
  allObjectClass,
  sharedObjectClass,
  translations,
  delay,
  duration,
  direction,
}) => {
  const shared = allObjectClass ? false : true;
  const size = renderObjects ? renderObjects.length : 0;
  let delayOrder = [];
  if (!direction) {
    direction = 'ltr';
  }
  if (!delay) {
    delay = 0.15;
  }

  const createCenteredArray = (size) => {
    // Initialize the array with zeros to establish indices
    let arr = new Array(size).fill(0);

    // Find the middle index
    let mid = Math.floor(size / 2);

    // Start placing values from the middle, alternating between sides
    for (let i = 0; i < size; i++) {
      // Calculate index offset based on the alternating sides
      let index = mid + (i % 2 === 0 ? -Math.floor(i / 2) : Math.ceil(i / 2));

      // Place the value in the computed index
      arr[index] = i;
    }

    return arr;
  };

  switch (direction) {
    case 'ltr':
      delayOrder = Array.from({ length: size }, (_, i) => i + 1);
      break;
    case 'rtl':
      delayOrder = Array.from({ length: size }, (_, i) => i + 1);
      delayOrder.reverse();
      break;
    case 'ctr':
      delayOrder = createCenteredArray(size);
      break;
    case 'sim':
      delayOrder = new Array(size).fill(0);
      break;
    default:
      delayOrder = Array.from({ length: size }, (_, i) => i + 1);
      break;
  }

  const getDelay = (index) => {
    return (delayOrder[index] * delay) / 1000;
  };

  return (
    <div className={wrapperClass ? wrapperClass : ''}>
      {renderObjects && renderObjects.length
        ? renderObjects.map((obj, index) => {
            return (
              <motion.div
                className={
                  shared
                    ? sharedObjectClass
                    : Array.isArray(allObjectClass) && allObjectClass[index]
                    ? allObjectClass[index]
                    : ''
                }
                initial={{
                  ...(Array.isArray(translations) && translations[index]
                    ? translations[index]
                    : {}),
                  scale: 0,
                }}
                animate={{
                  ...(Array.isArray(translations) && translations[index]
                    ? translations[index]
                    : {}),
                  scale: 1,
                }}
                transition={{
                  scale: {
                    duration: duration ? duration / 1000 : 0.15,
                    delay: getDelay(index),
                    type: 'spring',
                  },
                  x: { duration: 0 },
                }}
                style={{ willChange: 'transform' }}
              >
                {obj}
              </motion.div>
            );
          })
        : null}
    </div>
  );
};

export default Bubble;
