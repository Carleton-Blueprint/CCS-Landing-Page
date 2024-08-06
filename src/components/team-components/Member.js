import React, { useState } from 'react';
import linkedinIcon from '../../images/linkedin-icon.png';

const Member = (props) => {
  const url =
    props.member && props.member.headshot && props.member.headshot.file
      ? props.member.headshot.file.url
      : null;
  const [isHovering, setIsHovering] = useState(false);

  const headshotStyle = {
    backgroundImage: 'url(' + url + ')',
  };

  const overlayStyle = {
    backgroundSize: '100% 200%',
    backgroundPosition: isHovering ? '100% 100%' : '100% 50%',
    backgroundImage:
      'linear-gradient(rgb(255,0,0,0), rgb(255,0,0,0), rgb(255,0,0,0.6))',
  };

  return (
    <div className="h-[600px] lg:h-[620px]">
      <div
        className="bg-cover w-[240px] h-[320px] lg:w-[300px] lg:h-[400px] rounded-tr-3xl rounded-bl-3xl"
        style={headshotStyle}
      >
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="transition-all duration-6000 ease-linear top-0 left-0 w-[240px] h-[320px] lg:w-[300px] lg:h-[400px] rounded-tr-3xl rounded-bl-3xl"
          style={overlayStyle}
        >
          <button
            className={`flex relative top-[85%] left-[80%] lg:relative ${
              isHovering ? 'block' : 'lg:hidden'
            }`}
          >
            <a
              href={props.member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-black transition-all duration-100 ease-out rounded-full w-[40px] h-[40px] hover:bg-red-300 active:bg-blue-500 flex justify-center items-center"
            >
              <img src={linkedinIcon} alt="linkedin" className="w-1/2 h-1/2" />
            </a>
          </button>
        </div>
        <div className="mt-[20px] ml-[-10px] mr-[-20px] h-[300px]">
          <h1 className="text-2xl font-bold text-center">
            {props.member.name}
          </h1>
          <h3 className="text-sm font-bold text-center">
            {props.member.position2 === 'None'
              ? props.member.position1
              : props.member.position1 + '/' + props.member.position2}
          </h3>
          <h3 className="text-sm font-bold text-center">
            {props.member.standing} year {props.member.program}
          </h3>
          <p className="text-sm text-justify">{props.member.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
