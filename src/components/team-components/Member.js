import React, { useState } from 'react';
import linkedinIcon from '../../images/linkedin-icon.png';
import Springy from '../animation-wrappers/Springy';

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
    <Springy magnitude="1">
      <div className="h-[600px] lg:h-[620px]">
        <div className="w-[240px] h-[320px] lg:w-[300px] lg:h-[400px]">
          <div
            style={{ ...headshotStyle }}
            className="duration-300 bg-cover hover:scale-105 rounded-tr-[3rem] rounded-bl-[3rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-[3rem] hover:rounded-br-[3rem]"
          >
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="transition-all ease-linears 
            w-[240px] h-[320px] lg:w-[300px] lg:h-[400px] rounded-tr-[3rem] rounded-bl-[3rem]
            shadow-light-bottom-left hover:shadow-light-bottom-left-hover duration-300
            hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-[3rem] hover:rounded-br-[3rem]"
              style={{ ...overlayStyle }}
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
                  className="border-2 border-black transition-all duration-100 ease-out 
              rounded-full w-[40px] h-[40px] hover:bg-red-300 active:bg-blue-500 
              flex justify-center items-center"
                >
                  <img
                    src={linkedinIcon}
                    alt="linkedin"
                    className="w-1/2 h-1/2"
                  />
                </a>
              </button>
            </div>
          </div>
          <div className="mt-5 h-[300px]">
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
    </Springy>
  );
};

export default Member;
