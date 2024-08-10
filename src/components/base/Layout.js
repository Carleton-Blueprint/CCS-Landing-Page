import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
const Layout = ({ pathname, backgroundColour, children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollY = useRef(0);
  const timeoutRef = useRef(null); // Reference to store the timeout

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear any existing timeout to reset the timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (currentScrollY > scrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Set a new timeout to hide the navigation bar after 3 seconds of inactivity
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      scrollY.current = currentScrollY;
    };

    const handleMouseMove = (event) => {
      // Clear any existing timeout to reset the timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (event.clientY < 150) {
        // Cursor is within 150 pixels of the top of the viewport
        setIsVisible(true);
      } else {
        // Set a new timeout to hide the navigation bar after 2 seconds if cursor is not near the top
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      // Clear timeout on component unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="layout" style={{ backgroundColor: backgroundColour }}>
      <ToastContainer />
      <div
        className={`top-0 left-0 right-0 fixed z-[100] transition-transform transform-gpu ease-out ${
          isVisible
            ? 'translate-y-0 duration-200'
            : '-translate-y-full duration-300'
        }`}
      >
        <NavigationBar isVisible={isVisible} pathname={pathname} />
      </div>
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
