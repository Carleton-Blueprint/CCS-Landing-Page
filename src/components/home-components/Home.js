import React from 'react';
import backgroundImage from '../../images/csshome_2024_background.png'; // Adjust the path as needed
import backgroundLines from '../../images/csshome_2024_background_lines.png'; // Adjust the path as needed
import { Link } from 'gatsby';
const Home = () => {
  return (
    <div
      className="w-full h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
        <div className='left-[10vw] top-[3vh] lg:top-[10vh] absolute text-7xl lg:text-9xl font-poppins font-extrabold text-[#8a8a8a79]'>CUSEC 2024</div>
        <div className='z-10 absolute inset-0'>
            <img src={backgroundLines} className='w-full h-1/2 lg:h-screen'/>
        </div>

        <div className='relative z-20 pl-60 pt-44 '>
            <div className='text-white text-5xl font-poppins font-bold'>
                Canadian University
            </div>
            <div className='text-white text-6xl mb-10 pt-5 font-poppins font-bold'>
                Software Engineering Conference
            </div>
            <Link to='/about-us'>
            <button className=' transition-all duration-150 ease-out active:bg-black hover:bg-[#ffffff3b] font-poppins font-medium px-4 p-2 rounded-full text-white flex appearance-none bg-[#ffffff80]'>
                Learn More
            </button>
            </Link>
            
        </div>
        <div className='absolute bottom-5 left-10 font-poppins text-3xl text-white font-light'>Janurary 11-13</div>
        <div className='absolute bottom-5 left-1/3 font-poppins text-3xl text-white font-light'>Le Centre Sheraton, Montreal, QC </div>
    </div>
  );
};

export default Home;
