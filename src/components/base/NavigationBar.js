import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CarletonCUSECLogo from '../../images/cusec-logo.png';
import { Link } from 'gatsby';
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
    <div className="container fixed top-0 h-14 md:h-16 z-[95]">
      {/* Add custom styles to tailwind config to match figma */}
      <div className="flex items-center justify-end w-screen gap-10 text-white md:hidden bg-gradient-to-r from-neutral-900 to-red-700 font-poppins">
        <button className="relative z-50 w-full pr-10" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="flex justify-between w-full">
              <img
                className="w-[45px] h-auto ml-2"
                alt="Carleton CUSEC Society Logo"
                src={CarletonCUSECLogo}
              />
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="flex justify-between w-full">
              <img
                className="w-[45px] h-auto ml-2"
                alt="Carleton CUSEC Society Logo"
                src={CarletonCUSECLogo}
              />
              <div className="mt-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          )}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 left-0 z-40 w-screen h-screen overflow-y-auto text-4xl font-bold bg-gradient-to-t from-neutral-900 via-red-900 to-red-800"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
            >
              <div className="w-screen border-t border-gray-400 my-14">
                <ul className="flex-col items-center justify-end pt-2 pl-20 ">
                  <li
                    className={`my-16 ${
                      currentpath === '/' ? 'font-bold' : 'font-semibold'
                    }`}
                  >
                    <a href="/">HOME</a>
                  </li>
                  <li
                    className={`my-16 ${
                      isCurrentPath('/about-us') ? 'font-bold' : 'font-semibold'
                    }`}
                  >
                    <a href="/about-us">ABOUT US</a>
                  </li>
                  <li
                    className={`my-16 ${
                      isCurrentPath('/events') ? 'font-bold' : 'font-semibold'
                    }`}
                  >
                    <a href="/events">EVENTS</a>
                  </li>
                  <li
                    className={`my-16 ${
                      isCurrentPath('/faq') ? 'font-bold' : 'font-semibold'
                    }`}
                  >
                    <a href="/faq">FAQ</a>
                  </li>
                  <li
                    className={`my-16 ${
                      isCurrentPath('/contact-us')
                        ? 'font-bold'
                        : 'font-semibold'
                    }`}
                  >
                    <a href="/contact-us">CONTACT</a>
                  </li>
                  <li
                    className={`my-16 ${
                      isCurrentPath('/contact-us')
                        ? 'font-bold'
                        : 'font-semibold'
                    }`}
                  >
                    <a href="/get-involved">GET INVOVLED</a>
                  </li>
                  <li
                    className={`my-16 ${
                      isCurrentPath('/contact-us')
                        ? 'font-bold'
                        : 'font-semibold'
                    }`}
                  >
                    <a href="/schedule">SCHEDULE</a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="items-center justify-between hidden w-screen gap-20 text-white md:flex bg-gradient-to-r from-neutral-900 to-red-700 font-poppins">
        <Link to="/">
          <div className="p-3 ml-3">
            <img
              className="w-[60px] h-auto"
              alt="Carleton CUSEC Society Logo"
              src={CarletonCUSECLogo}
            />
          </div>
        </Link>
        <ul className="flex items-center justify-end gap-20 pr-20">
          <li
            className={`${currentpath === '/' ? 'font-bold' : 'font-semibold'}`}
          >
            <a href="/">HOME</a>
          </li>
          <li
            className={`${
              isCurrentPath('/about-us') ? 'font-bold' : 'font-semibold'
            }`}
          >
            <a href="/about-us">ABOUT US</a>
          </li>
          <li
            className={`${
              isCurrentPath('/events') ? 'font-bold' : 'font-semibold'
            }`}
          >
            <a href="/events">EVENTS</a>
          </li>
          <li
            className={`${
              isCurrentPath('/faq') ? 'font-bold' : 'font-semibold'
            }`}
          >
            <a href="/faq">FAQ</a>
          </li>
          <li
            className={`${
              isCurrentPath('/contact-us') ? 'font-bold' : 'font-semibold'
            }`}
          >
            <a href="/contact-us">CONTACT</a>
          </li>
          <li
            className={`${
              isCurrentPath('/contact-us') ? 'font-bold' : 'font-semibold'
            }`}
          >
            <a href="/get-involved">GET INVOVLED</a>
          </li>
          <li
            className={`${
              isCurrentPath('/contact-us') ? 'font-bold' : 'font-semibold'
            }`}
          >
            <a href="/schedule">SCHEDULE</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
