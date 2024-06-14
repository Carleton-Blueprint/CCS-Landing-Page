import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

const NavigationBar = (props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentpath = props.pathname;

  const isCurrentPath = (page) =>{
    if (currentpath.startsWith(page)){
      return true;
    }
    return false;
  }
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { x: '100%'},
    visible: { x: 0},
    exit: { x: '100%'}
  };

  return (
    // change height based on screen
    <div className='container h-14 md:h-16'>
      {/* Add custom styles to tailwind config to match figma */}
      <div className='flex md:hidden w-screen justify-end items-center bg-gradient-to-r bg-gradient-to-r from-neutral-900 to-red-700 gap-10 text-white font-poppins'>
        <button className='relative z-50 pr-10' onClick={toggleMenu}> 
          {isMenuOpen 
          ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>
          }
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className='fixed top-0 left-0 w-screen h-screen bg-gradient-to-t from-neutral-900 via-red-900 to-red-800 text-4xl font-bold'
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: "tween", ease: 'easeInOut', duration: 0.5}}  
            >
              <div className="w-screen border-t border-gray-400 my-14"></div>
              <ul className='flex-col justify-end items-center pt-2 pl-20 '>
                <li className='my-16'>HOME</li>
                <li className='my-16'>ABOUT US</li>
                <li className='my-16'>EVENTS</li>
                <li className='my-16'>FAQ</li>
                <li className='my-16'>CONTACT</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='hidden md:flex w-screen justify-end items-center bg-gradient-to-r from-neutral-900 to-red-700 gap-20 text-white font-poppins'>
        <ul className='flex justify-end items-center gap-20 pr-20'>
          <li className={`${currentpath === '/' ? 'font-bold' : 'font-normal'}`}>HOME</li>
          <li className={`${isCurrentPath('/about') ? 'font-bold' : 'font-bold'}`}>ABOUT US</li>
          <li className={`${isCurrentPath('/events') ? 'font-bold' : 'font-bold'}`}>EVENTS</li>
          <li className={`${isCurrentPath('/FAQ') ? 'font-bold' : 'font-bold'}`}>FAQ</li>
          <li className={`${isCurrentPath('/contact') ? 'font-bold' : 'font-bold'}`}>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar 