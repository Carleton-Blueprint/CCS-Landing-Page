import React from 'react';

const Header = (props) => {
  return (
    <div className="">
      <img
        className="object-cover object-bottom lg:h-[80vh] md:h-[60vh] sm:h-[50vh] xl:h-[90vh] w-screen z-0"
        src={props.background}
        alt="Header Background"
      />
      <div className="flex absolute justify-center z-10 top-[12vh] sm:top-[12vh] lg:top-[15vh] top-[8vh] w-screen text-center">
        <h1 className="lg:text-[70px] md:text-[50px] sm:text-[40px] text-[40px] font-bold text-white mt-4">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
