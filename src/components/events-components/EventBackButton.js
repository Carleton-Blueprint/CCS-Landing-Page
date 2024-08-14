import React from 'react';
import { Link } from 'gatsby';
import backArrow from '../../images/backArrowIcon.png';
const EventBackButton = () => {
  return (
    <Link to="/events/">
      <button
        className="apparance-none w-12 h-12 bg-[#ffffff3b] active:bg-black hover:bg-darkGrey transition-all ease-out duration-200 rounded-full flex items-center justify-center"
        aria-label="go back to events"
      >
        <img alt="Back button" src={backArrow} className="scale-50" />
      </button>
    </Link>
  );
};

export default EventBackButton;
