import React from 'react';
import backgroundImage from '../../images/csshome_2024_background.png';
import backgroundLines from '../../images/csshome_2024_background_lines.png';
import HomeImageCarousel from './home-gallery-components/HomeImageCarousel';
import { Link } from 'gatsby';
const Home = ({ data }) => {
  return (
    <div
      className="flex flex-col w-full h-[140vh] md:h-[100vh] bg-repeat align-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute md:top-[5vh] top-[12vh] inset-0 z-[0]">
        <img src={backgroundLines} className="w-full h-auto lg:h-screen" />
      </div>
      <div className="left-[10vw] top-[12vh] md:top-[10vh] lg:top-[12vh] absolute">
        <div className="text-7xl z-30 text-[90px] md:text-[190px] lg:text-[150px] font-poppins font-extrabold text-[#8a8a8a79]">
          CUSEC 2024
        </div>
        <div className="relative z-20">
          <div className="text-3xl font-bold text-white md:text-7xl lg:text-5xl font-poppins">
            Canadian University
          </div>
          <div className="pt-5 mb-10 text-4xl font-bold text-white md:text-7xl lg:text-6xl font-poppins">
            Software Engineering Conference
          </div>
        </div>

        <Link to="/about-us">
          <button className="z-60 transition-all duration-150 ease-out active:bg-black hover:bg-[#ffffff3b] font-poppins font-medium px-4 p-2 rounded-full text-white flex appearance-none bg-[#ffffff80] md:text-3xl lg:text-xl">
            Learn More
          </button>
        </Link>

        <div className="mt-8 mr-[4em] lg:absolute lg:right-4 lg:top-[35vh]">
          {data ? (
            <HomeImageCarousel
              images={data.allContentfulAboutUsGallery.nodes}
              size="md"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
