import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const NavigationBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentpath = props.pathname;

  const isCurrentPath = (page) => {
    if (currentpath.startsWith(page)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' },
  };

  return (
    // change height based on screen
    <div className="container h-14 md:h-16">
      {/* Add custom styles to tailwind config to match figma */}
      <div className="flex items-center justify-end w-screen gap-10 text-white md:hidden bg-gradient-to-r from-neutral-900 to-red-700 font-poppins">
        <button className="relative z-50 pr-10" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />{' '}
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />{' '}
            </svg>
          )}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 left-0 z-40 w-screen h-screen text-4xl font-bold bg-gradient-to-t from-neutral-900 via-red-900 to-red-800"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
            >
              <div className="w-screen border-t border-gray-400 my-14"></div>
              <ul className="flex-col items-center justify-end pt-2 pl-20 ">
                <li
                  className={`my-16 ${
                    currentpath === '/' ? 'font-bold' : 'font-semibold'
                  }`}
                >
                  HOME
                </li>
                <li
                  className={`my-16 ${
                    isCurrentPath('/about') ? 'font-bold' : 'font-semibold'
                  }`}
                >
                  ABOUT US
                </li>
                <li
                  className={`my-16 ${
                    isCurrentPath('/events') ? 'font-bold' : 'font-semibold'
                  }`}
                >
                  EVENTS
                </li>
                <li
                  className={`my-16 ${
                    isCurrentPath('/FAQ') ? 'font-bold' : 'font-semibold'
                  }`}
                >
                  FAQ
                </li>
                <li
                  className={`my-16 ${
                    isCurrentPath('/contact') ? 'font-bold' : 'font-semibold'
                  }`}
                >
                  CONTACT
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="items-center justify-end hidden w-screen gap-20 text-white md:flex bg-gradient-to-r from-neutral-900 to-red-700 font-poppins">
        <ul className="flex items-center justify-end gap-20 pr-20">
          <li
            className={`${currentpath === '/' ? 'font-bold' : 'font-semibold'}`}
          >
            HOME
          </li>
          <li
            className={`${
              isCurrentPath('/about') ? 'font-bold' : 'font-semibold'
            }`}
          >
            <div className=''>
              ABOUT US
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" ml-2 inline size-6">
                <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
              </svg>

            </div>

            <div className='z-0 relative top-[20px] bg-red-500 p-2'>Meet The Team</div>
          </li>
          <li
            className={`${
              isCurrentPath('/events') ? 'font-bold' : 'font-semibold'
            }`}
          >
            EVENTS
          </li>
          <li
            className={`${
              isCurrentPath('/FAQ') ? 'font-bold' : 'font-semibold'
            }`}
          >
            FAQ
          </li>
          <li
            className={`${
              isCurrentPath('/contact') ? 'font-bold' : 'font-semibold'
            }`}
          >
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
