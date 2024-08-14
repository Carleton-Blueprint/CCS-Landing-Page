import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AppearFrom from '../animation-wrappers/AppearFrom';
const Header = (props) => {
  return (
    <AppearFrom direction="top" speed="1">
      <img
        className="object-cover object-bottom lg:h-[90vh] h-[70vh] w-full z-0"
        src={props.background}
        alt="Header Background"
      />
      <div className="absolute z-10 top-[14vh] sm:top-[20vh] md:top-[18vh] w-full text-center">
        <h1 className="lg:text-[80px] md:text-[70px] sm:text-[60px] text-[50px] font-bold text-white">
          {props.title}
        </h1>
      </div>
    </AppearFrom>
  );
};

export default Header;
