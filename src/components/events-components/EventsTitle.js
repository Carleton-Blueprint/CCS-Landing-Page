import React from 'react';
import background from '../../images/events-header.svg';
import { Link } from 'gatsby';
import AppearFrom from '../animation-wrappers/AppearFrom';

const EventsTitle = () => {
  return (
    <>
      <div
        className="w-full min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            <hr className="w-3/4 mt-16 mb-16 opacity-50 lg:mt-16 lg:mb-16" />{' '}
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
            <AppearFrom direction="left" speed="3">
              <a href="https://2024.cusec.net/">
                <button
                  className="text-black rounded-full px-6 py-2 text-center shadow-dark-bottom-left text-sm 
                flex justify-center items-center cursor-pointer bg-darkGrey hover:bg-[#9E7979] 
                hover:shadow-sm active:bg-[#631919] active:Shadow-none active:text-darkGrey 
                active:duration-75 active:ease-linear transition-all ease-in duration-200"
                  aria-label="go to Canadian University Software Engineering Conference home page"
                >
                  Read More
                </button>
              </a>
              <Link to="/schedule">
                <button
                  className="text-black rounded-full px-6 py-2 text-center shadow-dark-bottom-left text-sm 
                flex justify-center items-center cursor-pointer bg-darkGrey hover:bg-[#9E7979] 
                hover:shadow-sm active:bg-[#631919] active:Shadow-none active:text-darkGrey 
                active:duration-75 active:ease-linear transition-all ease-in duration-200"
                  aria-label="go to the schedule"
                >
                  CUSEC 2024 Schedule
                </button>
              </Link>
            </AppearFrom>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsTitle;
