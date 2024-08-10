import React from 'react';
import { Link } from 'gatsby';
const EventReadMore = ({ eventSlug }) => {
  return (
    <Link to={`/events/${eventSlug}`}>
      <div className=" rounded-full px-6 py-2 text-center text-sm flex justify-center text-darkGrey border-darkGrey border-solid border items-center cursor-pointer bg-transparant hover:bg-[#916b6b4b] active:bg-[#d663634b] transition-all ease-in duration-200">
        Read More
      </div>
    </Link>
  );
};

export default EventReadMore;
