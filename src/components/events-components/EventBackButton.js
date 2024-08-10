import React from 'react';
import { Link } from 'gatsby';
import backArrow from '../../images/backArrowIcon.png';
const EventBackButton = () => {
  return (
    <div>
      <Link to="/events/">
        <div className="w-12 h-12 bg-darkGrey active:bg-black hover:bg-[#ffffff3b] transition-all ease-out duration-200 rounded-full flex items-center justify-center">
          <img alt="Back button" src={backArrow} className="scale-50" />
        </div>
      </Link>
    </div>
  );
};

export default EventBackButton;
