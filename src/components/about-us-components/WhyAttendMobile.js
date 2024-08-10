import React from 'react';
import AttendReason from './AttendReason';
import { useState } from 'react';
import { WhyAttendRightArrow } from '../../SVGs/about-us-SVGs';
const WhyAttendMobile = (props) => {
  const [renderIndex, setRenderIndex] = useState(1);
  const allNodes = props.reasons;
  return (
    <div>
      <div className="relative flex justify-center items-center h-[360px] lg:w-[600px]">
        {allNodes.map((r, index) => {
          return (
            <div
              className={` transition-all duration-200 ease-in-out absolute z-40 w-[70vw]  ${
                renderIndex === index ? 'opacity-100 z-50' : 'opacity-0 z-0'
              }`}
            >
              <AttendReason
                key={r.id}
                title={r.title}
                subtitle={r.subtitle}
                isCenter={true}
                brightness={100}
                image={r.icon}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-align lg:w-[600px] mt-10">
        <button
          className="bg-[#ABAAAA] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full m-2"
          onMouseEnter={(e) =>
            (e.currentTarget.className =
              'bg-brightRed w-[40px] h-[40px] -translate-x-1 transition-all ease-in-out duration-300 rounded-full m-2')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.className =
              'bg-[#ABAAAA] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full m-2')
          }
          onClick={() => {
            setRenderIndex((prev) =>
              prev - 1 === -1 ? allNodes.length - 1 : prev - 1
            );
          }}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="previous"
        >
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path
              className={`transition-all ease-in-out duration-300`}
              d="M11.9393 18.9393C11.3536 19.5251 11.3536 20.4749 11.9393 21.0607L21.4853 30.6066C22.0711 31.1924 23.0208 31.1924 23.6066 30.6066C24.1924 30.0208 24.1924 29.0711 23.6066 28.4853L15.1213 20L23.6066 11.5147C24.1924 10.9289 24.1924 9.97919 23.6066 9.3934C23.0208 8.80761 22.0711 8.80761 21.4853 9.3934L11.9393 18.9393ZM14.5 18.5H13V21.5H14.5V18.5Z"
              fill="white"
            />
          </svg>
        </button>

        <button
          className="bg-[#ABAAAA] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full m-2"
          onMouseEnter={(e) =>
            (e.currentTarget.className =
              'bg-brightRed w-[40px] h-[40px] translate-x-1 transition-all ease-in-out duration-300 rounded-full m-2')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.className =
              'bg-[#ABAAAA] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full m-2')
          }
          onClick={() => {
            setRenderIndex((prev) => (prev + 1) % allNodes.length);
          }}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="next"
        >
          <WhyAttendRightArrow />
        </button>
      </div>
    </div>
  );
};

export default WhyAttendMobile;
