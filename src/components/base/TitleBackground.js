import React from 'react'
import lineGraphics from '../../images/lineGraphics.png'
import smoke0 from '../../images/smokeRectangle0.png'
import smoke1 from '../../images/smokeRectangle1.png'
const TitleBackground = (props) => {
  const title = props.title

  return (
    <>
    
    <div className="w-full h-auto transform">
      <svg id="svg-mask" xmlns="http://www.w3.org/2000/svg" viewBox="0 258 1920 776">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="25%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="red" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path d="m1920,884s-238.01,150-485.96,150c-183.3,0-376.04-104-474.04-150-95.58-44.86-304.06-150-493.26-150C225.86,734,0,884,0,884V0h1920v884Z" fill="url(#gradient)" />
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="64" fontFamily='poppins' fontWeight='600' fill="white">{title }</text>
      </svg>

      <div className='w-screen absolute top-0'>
        <img src={lineGraphics} className='w-full'>
          
        </img>
      </div>
      <div className='w-screen absolute top-0 transform -translate-y-1/4 translate-x-[3%] rotate-6'>
        <img src={smoke0} className='w-full'>
          
        </img>
      </div>
      <div className='w-screen absolute top-0 transform translate-y-[10%] scale-x-[-1]'>
        <img src={smoke0} className='w-full'>
          
        </img>
      </div>
    </div>

    </>
  )
}

export default TitleBackground
