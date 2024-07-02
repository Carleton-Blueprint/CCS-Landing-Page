import React from "react";

const Header = (props) => {
  return (
    <div className="">
      <div className="flex absolute mt-[10%] pl-[40%]">
        <h1 className="text-6xl font-bold text-center text-white">{props.title}</h1>
      </div>
      <img
        className="object-contain w-screen"
        src={props.background}
        alt="Header Background"
      />
    </div>
  );
};

export default Header;
