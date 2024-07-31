import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ isCurrent, hover, setHover, label, items, mobile }) => {
  return (
    <>
      <motion.div initial={false}>
        <div className="whitespace-nowrap">
          <a href={label.href}>{label.name}</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={` ml-2 inline ${
              mobile ? 'size-10' : 'size-6'
            } cursor-pointer`}
            onClick={() => setHover((prev) => !prev)}
          >
            {hover ? (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            ) : (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            )}
          </svg>
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
          {
            hover && (
              <>
              {items.map((item, index) => {
                return (
                    <motion.div
                      initial={{ opacity: 0, y: mobile ? -20 : 35 * (index+1) }}
                      animate={{ opacity: 1, y: mobile ? 20 : 50 * (index+1) }}
                      exit={{ opacity: 0, y: mobile ? -20 : 35 * (index+1) }}
                      whileInView={{ y: mobile ? 20 : 50 * (index+1) }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <div
                          className={`${
                            isCurrent(item.href) ? 'font-bold' : 'font-semibold'
                          } ${
                            mobile
                              ? 'ml-[50px] mb-[30px]'
                              : 'right-[0vw] whitespace-nowrap z-[100] absolute bg-red-500 p-2 bg-red-900 rounded-lg'
                          }`}
                        >
                          <a href={item.href}>{item.name}</a>
                        </div>
                      </div>
                    </motion.div>
                );
              })} 
              </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dropdown;
