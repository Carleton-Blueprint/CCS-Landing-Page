import React from "react";

const AttendReason = (props) => {
  return (
    <div className="flex flex-wrap w-full h-full relative">
      {/* <div
        className={`bg-cover bg-center h-64 w-64 rounded-lg drop-shadow-md items-center justify-center ${props.brightness}`} 
        style={{ backgroundImage: `url(${decadron})` }}
      >
        <p className="text-center pt-10 text-white">
          <strong>{props.title}</strong>
        </p>
        <p className="text-center px-4 py-4 pt-4 text-white">
          {props.subtitle}
        </p>
      </div> */}

      <svg width="341" height="360" viewBox="0 0 341 360" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          
          <path d="M170.878 0.454032L69.5595 32.7601L5.94979 115.895L4.57035 225.991L66.1252 315.355L170.713 351.469L272.55 316.672L336.549 229.305L336.714 121.75L274.293 34.9018L170.878 0.454032Z" fill="url(#diagonalGradient)" filter="url(#shadow)"/>
          
    
          <text x="50%" y="25%" dominant-baseline="middle" text-anchor="middle" fill="white" fontSize='25px' fontWeight='500' fontFamily="poppins">{props.title}</text>

      </svg>


    </div>
  );
};

export default AttendReason;
