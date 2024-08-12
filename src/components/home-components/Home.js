import React from 'react';
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
      className="w-full h-auto overflow-y-hidden md:min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 top-[5vh] z-0">
        <img
          src={backgroundLines}
          alt="background-lines"
          className="w-full h-1/2 lg:h-full"
        />
      </div>
      <div className="flex justify-center w-full ">
        <div className="flex-col align-center w-[90%] z-10 mt-[6rem] sm:mt-[8rem]">
          <div className="w-full text-6xl sm:text-8xl lg:text-9xl font-poppins font-extrabold text-[#8a8a8a79] z-20">
            <TypeAnimation
              sequence={['', 500, 'CCS 2024']}
              wrapper="span"
              speed={40}
              repeat={0}
            />
            <AppearFrom direction="left" speed="2">
              <div className="w-full mt-[-20px]">
                <div className="z-20 text-3xl font-bold text-white sm:text-5xl lg:text-6xl font-poppins">
                  Carleton CUSEC Society
                </div>
                <div className="z-20 text-lg font-light text-white lg:w-3/4 xl:w-1/2 lg:mb-10 font-poppins">
                  Representing Carleton University as an independent member of
                  the Canadian University Software Engineering Conference
                </div>
              </div>
            </AppearFrom>
          </div>
          <div className="flex flex-col items-center w-full h-full mt-2 mb-10 xl:items-start xl:h-auto xl:flex-row">
            <div className="w-full mb-5">
              <AppearFrom direction="left" speed="2">
                <div className="w-fit">
                  <Link to="/about-us">
                    <button
                      className="text-base transition-all duration-150 ease-out active:bg-black hover:bg-[#ffffff3b] 
                font-poppins font-medium px-4 p-2 rounded-full text-white flex appearance-none bg-[#ffffff80]"
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              </AppearFrom>
            </div>
            {data ? (
              <Springy style="md:flex-1 xl:flex-0 flex justify-center items-center">
                <AppearFrom direction="right" speed="2">
                  <HomeImageCarousel
                    images={data.allContentfulAboutUsGallery.nodes}
                  />
                </AppearFrom>
              </Springy>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
