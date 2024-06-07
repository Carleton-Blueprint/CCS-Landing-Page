import React from "react";
import background from "../../images/Contact_us_background.svg";

const Header = () => {
  return (
    <>
      <div className="flex absolute mt-[10%] pl-[40%]">
        <h1 className="text-center text-white text-6xl font-bold">Contact Us</h1>
      </div>
      <img
        className="w-screen"
        src={background}
        alt="Contact Us Background"
      />
    </>
  );
};

export default Header;
