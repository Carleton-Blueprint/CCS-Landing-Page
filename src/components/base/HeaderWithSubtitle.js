import React from 'react';
import AppearFrom from '../animation-wrappers/AppearFrom';

const HeaderWithSubtitle = (props) => {
  return (
    <div>
      <img
        className="object-cover object-bottom lg:h-[90vh] md:[70vh] sm:h-[60vh] w-full z-0"
        src={props.background}
        alt="Header Background"
      />

      <div className=" absolute z-10 top-[5vh] sm:top-[12vh] w-full text-center">
        <AppearFrom direction="left" speed="2">
          <h1 className="lg:text-[90px] md:text-[50px] sm:text-[30px] text-[40px] font-bold text-white">
            {props.title}
          </h1>
        </AppearFrom>
        <AppearFrom direction="right" speed="2">
          <h1 className="lg:text-[50px] mt-[-10] md:text-[50px] sm:text-[30px] text-[40px] font-semibold text-white">
            {props.subtitle}
          </h1>
        </AppearFrom>
      </div>
    </div>
  );
};

export default HeaderWithSubtitle;
