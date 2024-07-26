import React, {useState, useEffect} from 'react';
import backgroundImage from '../../images/csshome_2024_background.png';
import backgroundLines from '../../images/csshome_2024_background_lines.png'; 
import HomeImageCarousel from './home-gallery-components/HomeImageCarousel';
import { Link } from 'gatsby';
const Home = ({data}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [height, setViewportHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      className="w-full h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
        <div className='w-40 lg:w-auto left-[10vw] top-[8vh] lg:top-[11vh] absolute text-5xl lg:text-9xl font-poppins font-extrabold text-[#8a8a8a79]'>
          <div>CCS 2025</div>
          
        </div>
        <div className='z-10 absolute inset-0'>
            <img src={backgroundLines} className='w-full h-1/2 lg:h-screen'/>
        </div>

        <div className='relative z-20 pl-10 lg:pl-60 pt-44 '>
            <div className='text-white text-xl lg:text-5xl font-poppins font-bold'>
                Canadian University
            </div>
            <div className='text-white textxl lg:text-6xl mb-5 lg:mb-10 pt-5 font-poppins font-bold'>
                Software Engineering Conference
            </div>
            <Link to='/about-us'>
            <button className=' transition-all duration-150 ease-out active:bg-black hover:bg-[#ffffff3b] font-poppins font-medium px-4 p-2 rounded-full text-white flex appearance-none bg-[#ffffff80]'>
                Learn More
            </button>
            </Link>
            
        </div>
        <div className='absolute bottom-5 left-10 font-poppins text-lg lg:text-3xl text-white font-light'>
          <div>Janurary 11-13</div> <div className='pt-4'>Le Centre Sheraton, Montreal, QC</div>
          </div>
        <div className='absolute right-1/2 bottom-[18vh] lg:bottom-[10vh] lg:right-1/4'>
            <HomeImageCarousel
            images={data.allContentfulAboutUsGallery.nodes}
            size={`${isMobile ? height <  700 ? 'sm' : 'md' : 'lg'}`}
            />
        </div>
    </div>
  );
};

export default Home;
