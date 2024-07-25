import React from 'react';

const HeaderWithSubtitle = (props) => {
  return (
    <div className="">
      <img
        className="object-cover object-bottom lg:h-[90vh] md:[70vh] sm:h-[60vh] w-screen z-0"
        src={props.background}
        alt="Header Background"
      />
      <div className=" absolute z-10 top-[5vh] sm:top-[12vh] w-screen text-center">
        <h1 className="lg:text-[90px] md:text-[50px] sm:text-[30px] text-[40px] font-bold text-white">
          {props.title}
        </h1>
        <h1 className="lg:text-[50px] mt-[-10] md:text-[50px] sm:text-[30px] text-[40px] font-semibold text-white">
          {props.subtitle}
        </h1>
      </div>
    </div>
  );
};

export default HeaderWithSubtitle;
