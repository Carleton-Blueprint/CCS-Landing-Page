import React from 'react';
import { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AttendCard } from '../../SVGs/about-us-SVGs';
const AttendReason = (props) => {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    setFlipped(false);
  }, [props.isCenter]);
  return (
    <div className="flex group [perspective:1000px] w-full h-full transition-transform duration-200 hover:scale-110">
      <div
        className={`relative w-full h-full [transform-style:preserve-3d] transition-all duration-500 ${
          props.isCenter && flipped && '[transform:rotateY(180deg)]'
        }`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="absolute w-full [backface-visibility:hidden] h-full flex items-center justify-center font-bold text-white">
          <AttendCard title={props.title} />
          <div className="absolute w-24">
            {!flipped && props.image ? (
              <GatsbyImage
                className={`object-contain object-center h-full w-full drop-shadow-md`}
                image={props.image.gatsbyImageData}
              />
            ) : null}
          </div>
        </div>
        <div
          className="absolute [backface-visibility:hidden] w-full h-full [transform:rotateY(180deg)] 
        flex items-center justify-center font-bold text-white"
        >
          <AttendCard title={props.title} />
          <div className="absolute w-3/4 text-sm font-normal text-center md:px-4 lg:px-0">
            {props.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendReason;
