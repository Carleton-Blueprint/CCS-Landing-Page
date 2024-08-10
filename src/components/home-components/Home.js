import React, { useState, useEffect } from 'react';
import backgroundImage from '../../images/csshome_2024_background.png';
import backgroundLines from '../../images/csshome_2024_background_lines.png';
import { TypeAnimation } from 'react-type-animation';
import HomeImageCarousel from './home-gallery-components/HomeImageCarousel';
import { Link } from 'gatsby';
import AppearFrom from '../animation-wrappers/AppearFrom';
import Springy from '../animation-wrappers/Springy';

const Home = ({ data }) => {
  return (
    <div
      className="w-[100%] relative h-[110vh] sm:h-screen overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 top-[5vh] z-0">
        <img src={backgroundLines} className="w-full h-1/2 lg:h-screen" />
      </div>
      <div className="relative z-10 mt-[6rem] ml-5 sm:ml-12 sm:mt-[8rem]">
        <div className="w-full text-6xl sm:text-8xl lg:text-9xl font-poppins font-extrabold text-[#8a8a8a79] z-20">
          <TypeAnimation
            sequence={['', 500, 'CCS 2024']}
            wrapper="span"
            speed={40}
            repeat={0}
          />
          <AppearFrom direction="left" speed="2">
            <div className="mt-[-10px] overflow-x-hidden w-full">
              <div className="z-20 text-3xl font-bold text-white sm:text-5xl lg:text-5xl font-poppins">
                Canadian University
              </div>
              <div className="z-20 text-3xl font-bold text-white sm:text-6xl lg:text-6xl lg:mb-10 font-poppins">
                Software Engineering Conference
              </div>
              <Link to="/about-us">
                <button className="text-lg transition-all duration-150 ease-out active:bg-black hover:bg-[#ffffff3b] font-poppins font-medium px-4 p-2 rounded-full text-white flex appearance-none bg-[#ffffff80]">
                  Learn More
                </button>
              </Link>
            </div>
          </AppearFrom>
        </div>
      </div>

      <div className="absolute right-1/2 bottom-5 sm:bottom-[12vh] lg:bottom-[10vh] lg:right-1/4">
        {data ? (
          <AppearFrom direction="right" speed="2">
            <HomeImageCarousel
              images={data.allContentfulAboutUsGallery.nodes}
              size="lg"
            />
          </AppearFrom>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
