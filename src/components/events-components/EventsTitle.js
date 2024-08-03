import React from 'react';
import background from '../../images/events-header.svg';
import { Link } from 'gatsby';

const EventsTitle = () => {
  return (
    <>
      <div
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${background})`,
          //   backgroundPosition: "center",
          //   width: "100%",
          height: '100vh', // or any other height
          //   clipPath: "inset(0% 17% 0% 17%)",
        }}
      >
        <div className="flex justify-center">
          <hr className="w-full opacity-50" />
        </div>
        <div className="container flex-col text-white mt-[10vh] lg:p-16 p-4">
          <h1 className="text-5xl font-semibold text-center lg:text-7xl lg:pt-0">
            Events
          </h1>
          <div className="flex justify-center">
            <hr className="w-3/4 mt-16 mb-16 opacity-50 lg:mt-32 lg:mb-32" />{' '}
          </div>

          <p className="p-2 text-xl text-gray-300 lg:text-4xl">
            Featured Event
          </p>
          <p className="p-2 text-2xl font-bold text-white lg:text-4xl">
            Canadian University
          </p>
          <p className="p-2 text-3xl font-bold text-white lg:text-6xl">
            Software Engineering Conference
          </p>
          <div className="flex gap-10 p-8">
            <a href="https://2024.cusec.net/">
              <div className="rounded-full px-6 py-2 text-center text-sm flex justify-center text-[#D9D9D9] border-[#D9D9D9] border-solid border items-center cursor-pointer bg-redStop hover:bg-primaryGray active:bg-[#d663634b] transition-all ease-in duration-100">
                Read More
              </div>
            </a>
            <Link to="/schedule">
              <div
                className={`text-black rounded-full px-6 py-2 text-center shadow-dark-bottom-left text-sm flex justify-center items-center cursor-pointer bg-[#D9D9D9] hover:bg-[#9E7979] hover:shadow-sm active:bg-[#631919] active:Shadow-none active:text-[#D9D9D9] active:duration-75 active:ease-linear transition-all ease-in duration-200`}
              >
                CUSEC 2024 Schedule
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsTitle;
