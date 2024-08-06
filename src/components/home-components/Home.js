import React, { useState, useEffect } from 'react';
import backgroundImage from '../../images/csshome_2024_background.png';
import backgroundLines from '../../images/csshome_2024_background_lines.png';
import { TypeAnimation } from 'react-type-animation';
import HomeImageCarousel from './home-gallery-components/HomeImageCarousel';
import { Link } from 'gatsby';
import Layout from '../base/Layout';

const Home = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [height, setViewportHeight] = useState(0);

  useEffect(() => {
    if (!window) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setViewportHeight(window.innerHeight);
    };

    // Invoke handleResize initially
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className=" w-[100%] h-screen overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 z-0">
        <img src={backgroundLines} className="w-full h-1/2 lg:h-screen" />
      </div>
      <div className="absolute">
        <div
          className="relative w-full left-[3vw] lg:left-[10vw] top-[8vh] 
        lg:top-[11vh] text-6xl sm:text-8xl lg:text-9xl font-poppins font-extrabold text-[#8a8a8a79]"
        >
          <TypeAnimation
            sequence={['', 500, 'CCS 2024']}
            wrapper="span"
            speed={40}
            repeat={0}
          />
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
        </div>
      </div>

      <div className="absolute right-1/2 bottom-[10vh] sm:bottom-[12vh] lg:bottom-[10vh] lg:right-1/4">
        {data ? (
          <HomeImageCarousel
            images={data.allContentfulAboutUsGallery.nodes}
            size="lg"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
