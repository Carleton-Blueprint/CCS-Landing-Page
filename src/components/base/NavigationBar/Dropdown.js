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
    }, 300);
  };

  const handleClick = () => {
    setHover((prevHover) => !prevHover);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div initial={false}>
        <div className="whitespace-nowrap">
          <Link to={label.href}>{label.name}</Link>
          <RotatingArrow
            isHovering={hover}
            handleClick={handleClick}
            isMobile={mobile}
          />
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {hover && (
          <motion.div
            className={`hover:text-red-900 hover:bg-white active:text-white active:bg-primaryGray ${
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
                <Link to={item.href}>
                  <motion.div
                    key={index}
                    className={`${
                      isCurrent(item.href) ? 'font-bold' : 'font-normal'
                    } ${
                      mobile
                        ? 'ml-[50px] mb-[30px]'
                        : 'w-[9em] whitespace-nowrap z-[100] relative p-2 rounded-lg hover:text-red-900 hover:bg-white active:text-white active:bg-primaryGray transition-colors duration-150 ease-in-out text-center'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: mobile ? 20 : 0,
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    whileInView={{ y: mobile ? 20 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
