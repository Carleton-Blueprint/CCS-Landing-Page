import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RotatingArrow from './RotatingArrow';
import { Link } from 'gatsby';

const Dropdown = ({ isCurrent, hover, setHover, label, items, mobile }) => {
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    if (mobile) {
      return;
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setHover(true);
  };

  const handleMouseLeave = () => {
    if (mobile) {
      return;
    }
    timerRef.current = setTimeout(() => {
      setHover(false);
      timerRef.current = null;
    }, 200);
  };

  const handleClick = () => {
    setHover((prevHover) => !prevHover);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div initial={false}>
        <div className="whitespace-nowrap">
          <Link to={label.href}>{label.name}</Link>
          <RotatingArrow isHovering={hover} handleClick={handleClick} isMobile={mobile}/>
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {hover && (
          <motion.div
            className={`${
              !mobile ? 'absolute  bg-dark-red-to-light-red' : ''
            } rounded-lg top-[5.5rem] mb-10`}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: mobile ? 20 : 0,
            }}
            exit={{ opacity: 0, y: -20 }}
            whileInView={{ y: mobile ? 20 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className={`${!mobile ? 'text-center' : ''}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: mobile ? 20 : 0,
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  whileInView={{ y: mobile ? 20 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <div
                      className={`${
                        isCurrent(item.href) ? 'font-bold' : 'font-semibold'
                      } ${
                        mobile
                          ? 'ml-[50px] mb-[30px]'
                          : 'w-[9em] whitespace-nowrap z-[100] relative p-2 rounded-lg hover:text-red-900 hover:bg-white'
                      }`}
                    >
                      <a href={item.href}>{item.name}</a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
