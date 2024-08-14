import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CarletonCUSECLogo from '../../../images/ccs-logo.png';
import { Link } from 'gatsby';
import Dropdown from './Dropdown';
const NavigationBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [eventsHover, setEventsHover] = useState(false);
  const currentpath = props.pathname;
  const isCurrentPath = (page) => {
    if (currentpath.startsWith(page)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isMenuOpen) {
      props.lockNavBar();
      document.body.style.overflow = 'hidden';
    } else {
      props.unlockNavBar();
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
    <div className="container h-14 xl:h-auto z-[95]">
      <div className="flex items-center justify-end w-full gap-10 text-white xl:hidden bg-gradient-to-r from-neutral-900 to-red-700 font-poppins">
        <div className="relative z-50 w-full pr-10">
          {!isMenuOpen ? (
            <div className="flex justify-between w-full ">
              <a href={'/'}>
                <img
                  className="w-[45px] h-auto ml-2"
                  alt="Carleton CUSEC Society Logo"
                  src={CarletonCUSECLogo}
                />
              </a>
              <div className="mt-2" onClick={toggleMenu}>
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
              <a href={'/'}>
                <img
                  className="w-[45px] h-auto ml-2"
                  alt="Carleton CUSEC Society Logo"
                  src={CarletonCUSECLogo}
                />
              </a>
              <div className="mt-2.5" onClick={toggleMenu}>
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
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 left-0 z-40 w-full h-screen overflow-y-auto text-4xl font-bold bg-gradient-to-t from-neutral-900 via-red-900 to-red-800"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
            >
              <div className="w-full border-t border-gray-400 my-14">
                <ul className="flex-col items-center justify-end pt-2 pl-20 ">
                  <li
                    className={`my-16 hover:text-black active:text-primaryGray transition-colors duration-300 ${
                      currentpath === '/' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    <Link to="/">HOME</Link>
                  </li>
                  <li
                    className={`my-16 ${
                      isCurrentPath('/about-us') ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    <Dropdown
                      isCurrent={isCurrentPath}
                      hover={aboutHover}
                      setHover={setAboutHover}
                      label={{ name: 'About Us', href: '/about-us' }}
                      items={[{ name: 'Meet The Team', href: '/meet-team' }]}
                      mobile={true}
                    />
                  </li>
                  <li
                    className={`my-16 ${
                      isCurrentPath('/events') ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    <Dropdown
                      isCurrent={isCurrentPath}
                      hover={eventsHover}
                      setHover={setEventsHover}
                      label={{ name: 'Events', href: '/events' }}
                      items={[{ name: 'Schedule', href: '/schedule' }]}
                      mobile={true}
                    />
                  </li>
                  <li
                    className={`my-16 hover:text-black active:text-primaryGray transition-colors duration-300 ${
                      isCurrentPath('/faq') ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li
                    className={`my-16 hover:text-black active:text-primaryGray transition-colors duration-300 ${
                      isCurrentPath('/get-involved')
                        ? 'font-bold'
                        : 'font-normal'
                    }`}
                  >
                    <Link to="/get-involved">Get Involved</Link>
                  </li>
                  <li
                    className={`my-16 hover:text-black active:text-primaryGray transition-colors duration-300 ${
                      isCurrentPath('/contact-us') ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="items-center justify-between hidden w-full gap-20 text-white xl:flex bg-gradient-to-r from-neutral-900 to-red-700 font-poppins">
        <Link to="/">
          <div className="p-3 ml-3 ">
            <img
              className="w-[60px] h-auto hover:rotate-180 hover:scale-110 transition-all duration-300 ease-in-out"
              alt="Carleton CUSEC Society Logo"
              src={CarletonCUSECLogo}
            />
          </div>
        </Link>
        <ul className="flex items-center justify-end gap-20 pr-20">
          <li
            className={`hover:text-black active:text-primaryGray transition-colors duration-300 ${
              currentpath === '/' ? 'font-bold' : 'font-normal'
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={` ${
              isCurrentPath('/about-us') ? 'font-bold' : 'font-normal'
            } flex justify-center items-center`}
          >
            <Dropdown
              isCurrent={isCurrentPath}
              hover={aboutHover}
              setHover={setAboutHover}
              label={{ name: 'About Us', href: '/about-us' }}
              items={[{ name: 'Meet the Team', href: '/meet-team' }]}
              mobile={false}
            />
          </li>
          <li
            className={` ${
              isCurrentPath('/events') ? 'font-bold' : 'font-normal'
            } flex justify-center items-center`}
          >
            <Dropdown
              isCurrent={isCurrentPath}
              hover={eventsHover}
              setHover={setEventsHover}
              label={{ name: 'Events', href: '/events' }}
              items={[{ name: 'Schedule', href: '/schedule' }]}
              mobile={false}
            />
          </li>
          <li
            className={`hover:text-black active:text-primaryGray transition-colors duration-300 
${isCurrentPath('/faq') ? 'font-bold' : 'font-normal'}`}
          >
            <Link to="/faq">FAQ</Link>
          </li>
          <li
            className={`hover:text-black active:text-primaryGray transition-colors duration-300 ${
              isCurrentPath('/get-involved') ? 'font-bold' : 'font-normal'
            }`}
          >
            <Link to="/get-involved">Get Involved</Link>
          </li>
          <li
            className={`hover:text-black active:text-primaryGray transition-colors duration-300 ${
              isCurrentPath('/contact-us') ? 'font-bold' : 'font-normal'
            }`}
          >
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
