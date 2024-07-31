import React from 'react';
import { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
const AttendReason = (props) => {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    setFlipped(false);
  }, [props.isCenter]);
  return (
    <div
      className={`flex group [perspective:1000px] transition-all duration-150 ease-out w-full h-full ${
        props.isCenter ? 'hover:scale-[115%]' : 'hover:scale-110'
      }`}
    >
      <div
        className={`relative w-full h-full [transform-style:preserve-3d] transition-all duration-500 ${
          props.isCenter && flipped && '[transform:rotateY(180deg)]'
        }`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="absolute w-full [backface-visibility:hidden] h-full flex items-center justify-center font-bold text-white">
          <svg
            width="341"
            height="360"
            viewBox="0 0 341 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="diagonalGradient" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D31921" />
                <stop offset="100%" stopColor="#240406" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="3" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>

            <path
              d="M170.878 0.454032L69.5595 32.7601L5.94979 115.895L4.57035 225.991L66.1252 315.355L170.713 351.469L272.55 316.672L336.549 229.305L336.714 121.75L274.293 34.9018L170.878 0.454032Z"
              fill="url(#diagonalGradient)"
              filter="url(#shadow)"
            />

            <text
              x="50%"
              y="25%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="white"
              fontSize="25px"
              fontWeight="500"
              fontFamily="poppins"
            >
              {props.title}
            </text>
          </svg>
          <div className="absolute w-24">
            {props.image && (
              <GatsbyImage
                className={` object-contain object-center h-full w-full drop-shadow-md`}
                image={props.image.gatsbyImageData}
              />
            )}
          </div>
        </div>
        <div className="absolute [backface-visibility:hidden] w-full h-full [transform:rotateY(180deg)] flex items-center justify-center font-bold text-white">
          <svg
            width="341"
            height="360"
            viewBox="0 0 341 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="diagonalGradient" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D31921" />
                <stop offset="100%" stopColor="#240406" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="3" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>

            <path
              d="M170.878 0.454032L69.5595 32.7601L5.94979 115.895L4.57035 225.991L66.1252 315.355L170.713 351.469L272.55 316.672L336.549 229.305L336.714 121.75L274.293 34.9018L170.878 0.454032Z"
              fill="url(#diagonalGradient)"
              filter="url(#shadow)"
            />

            <text
              x="50%"
              y="25%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="white"
              fontSize="25px"
              fontWeight="500"
              fontFamily="poppins"
            >
              {props.title}
            </text>
          </svg>
          <div className="absolute font-normal text-center w-3/4">
            {props.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendReason;
