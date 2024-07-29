import React, { useState, useEffect } from 'react';
import backgroundImage from '../../images/csshome_2024_background.png';
import backgroundLines from '../../images/csshome_2024_background_lines.png';
import { TypeAnimation } from 'react-type-animation';
import HomeImageCarousel from './home-gallery-components/HomeImageCarousel';
import { Link } from 'gatsby';
const Home = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [height, setViewportHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!window) {
        return;
      }
      setIsMobile(window.innerWidth <= 768);
      setViewportHeight(window.innerHeight);
    };

    if (!window) {
      return;
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-40 lg:w-auto left-[10vw] top-[8vh] lg:top-[11vh] absolute text-5xl lg:text-9xl font-poppins font-extrabold text-[#8a8a8a79]">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            '',
            500, // wait 1s before replacing "Mice" with "Hamsters"
            'CCS 2024',
          ]}
          wrapper="span"
          speed={40}
          repeat={0}
        />
      </div>
      <div className="absolute inset-0 z-10">
        <img src={backgroundLines} className="w-full h-1/2 lg:h-screen" />
      </div>

      <div className="relative z-20 pl-10 lg:pl-60 pt-44 ">
        <div className="text-xl font-bold text-white lg:text-5xl font-poppins">
          Canadian University
        </div>
        <div className="pt-5 mb-5 font-bold text-white textxl lg:text-6xl lg:mb-10 font-poppins">
          Software Engineering Conference
        </div>
        <Link to="/about-us">
          <button className=" transition-all duration-150 ease-out active:bg-black hover:bg-[#ffffff3b] font-poppins font-medium px-4 p-2 rounded-full text-white flex appearance-none bg-[#ffffff80]">
            Learn More
          </button>
        </Link>
      </div>
      <div className="absolute text-lg font-light text-white bottom-5 left-10 font-poppins lg:text-3xl">
        <div>Janurary 11-13</div>{' '}
        <div className="pt-4">Le Centre Sheraton, Montreal, QC</div>
      </div>
      <div className="absolute right-1/2 bottom-[18vh] lg:bottom-[10vh] lg:right-1/4">
        {data ? (
          <HomeImageCarousel
            images={data.allContentfulAboutUsGallery.nodes}
            size={`${isMobile ? (height < 700 ? 'sm' : 'md') : 'lg'}`}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
