import React from 'react';

const Header = (props) => {
  return (
    <div className="">
      <img
        className="object-cover object-bottom lg:h-[90vh] h-[70vh] w-screen z-0"
        src={props.background}
        alt="Header Background"
      />
      <div className=" absolute z-10 top-[14vh] sm:top-[20vh] md:top-[18vh] w-screen text-center">
        <h1 className="lg:text-[80px] md:text-[70px] sm:text-[60px] text-[50px] font-bold text-white">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
