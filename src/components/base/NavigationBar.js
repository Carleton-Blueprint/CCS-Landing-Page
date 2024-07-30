import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CarletonCUSECLogo from '../../images/cusec-logo.png';
import { Link } from 'gatsby';
const NavigationBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
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
          {!isMenuOpen ? (
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
                      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=" ml-2 inline size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
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
              isCurrentPath('/about') ? 'font-bold' : 'font-semibold'
            } flex justify-center items-center`}
          >
            <motion.div
              initial={false}
              onHoverStart={() => setAboutHover((prev) => true)}
              onHoverEnd={() => setAboutHover((prev) => false)}
            >
              <div>
                ABOUT US
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" ml-2 inline size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </motion.div>

            <AnimatePresence initial={false}>
              {aboutHover && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 50 }}
                  exit={{ opacity: 0, y: 40 }}
                  whileInView={{ y: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`right-[-5vw] sm:right-[-15vw] md:right-[-5vw] lg:right-[-1vw] whitespace-nowrap z-[100] absolute right-[20px] bg-red-500 p-2 bg-red-900 rounded-lg`}
                  >
                    <a href='/meet-team'>Meet The Team</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
