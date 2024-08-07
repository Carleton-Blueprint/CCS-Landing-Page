import React from 'react';
export const AttendCard = ({ text }) => {
  return (
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
        {text}
      </text>
    </svg>
  );
};

export const WhyAttendRightArrow = () => {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`transition-all ease-in-out duration-300`}
        d="M26.0607 21.0607C26.6464 20.4749 26.6464 19.5251 26.0607 18.9393L16.5147 9.3934C15.9289 8.80761 14.9792 8.80761 14.3934 9.3934C13.8076 9.97918 13.8076 10.9289 14.3934 11.5147L22.8787 20L14.3934 28.4853C13.8076 29.0711 13.8076 30.0208 14.3934 30.6066C14.9792 31.1924 15.9289 31.1924 16.5147 30.6066L26.0607 21.0607ZM23.5 21.5L25 21.5L25 18.5L23.5 18.5L23.5 21.5Z"
        fill="white"
      />
    </svg>
  );
};
