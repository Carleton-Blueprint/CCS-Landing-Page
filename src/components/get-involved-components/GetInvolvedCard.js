import React, { useEffect, useState } from 'react';
import Springy from '../animation-wrappers/Springy';

const GetInvolvedCard = ({ data }) => {
  const [isHovering, setIsHovering] = useState(false);
  const title = data?.title;
  const description = data?.description.description;
  const icon = data?.icon.file.url;
  const altTag = data?.icon.description;
  const buttonText = data?.linkTitle;
  const link = data?.link;

  return (
    <Springy magnitude="2">
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative flex flex-col w-10/12 transition-all duration-30 text-white 
                rounded-tr-[3rem] rounded-bl-[3rem] 
                hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-[3rem] hover:rounded-br-[3rem] 
                bg-primaryGray h-[16rem] sm:w-[32rem] sm:h-[22rem] shadow-red-bottom-left hover:shadow-red-bottom-left-hover"
      >
        <div className="px-6 pt-8 ">
          <p className="mb-4 text-lg font-semibold sm:text-2xl font-poppins">
            {title}
          </p>
          <p className="text-xs sm:text-lg font-extralight font-poppins">
            {description}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <div className="p-6">
            <a href={link}>
              <button className="absolute w-1/3 transition-all duration-200 ease-in border border-white active:border-[#676666] rounded-3xl bottom-8 bg-primaryGray hover:bg-darkGrey active:bg-[#676666]">
                <p className="p-2 text-xs font-bold sm:text-lg hover:text-[#151515] active:text-white">
                  {buttonText}
                </p>
              </button>
            </a>
          </div>
          <div
            className={`absolute bottom-0 right-0 w-1/2 sm:w-[16rem]
            ${isHovering ? 'animate-growShrink' : ''}`}
          >
            <img src={icon} alt={altTag} />
          </div>
        </div>
      </div>
    </Springy>
  );
};

export default GetInvolvedCard;
