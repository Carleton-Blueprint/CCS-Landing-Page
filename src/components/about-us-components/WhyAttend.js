import React, { useRef, useState } from 'react';
import AttendReason from './AttendReason';

const WhyAttend = (props) => {
  const allNodes = props.reasons;
  const movingLeft = useRef(false);
  const imagesLength = allNodes.length;
  const startIndex = useRef(0);
  const [visibleImages, setVisibleImages] = useState([0, 1, 2]);

  //returns an array of 5 image indexes
  const generateVisibleImages = (start, left) => {
    movingLeft.current = left;
    let pushVisibleImages = [];
    for (let i = start; i < start + 3; i++) {
      pushVisibleImages.push(i % imagesLength);
    }
    return pushVisibleImages;
  };

  const increment = () => {
    startIndex.current = (startIndex.current + 1) % imagesLength;
    setVisibleImages(generateVisibleImages(startIndex.current, false));
  };

  //assuming same as increment but go backwards
  const decrement = () => {
    startIndex.current =
      startIndex.current - 1 === -1 ? imagesLength - 1 : startIndex.current - 1;
    setVisibleImages(generateVisibleImages(startIndex.current, true));
  };

  const getBrightness = (imageIndex) => {
    const index = visibleImages.indexOf(imageIndex);
    if (index === -1) {
      return 'brightness-0';
    }
    const brightnessArray = [
      'brightness-75',
      'brightness-100',
      'brightness-75',
    ];
    return brightnessArray[index];
  };

  //return className string with positionStyle, baseStyle, and zIndex and Size styling
  const getCss = (imageIndex) => {
    // Early return for images not currently visible
    if (!visibleImages.includes(imageIndex)) {
      return `${
        movingLeft.current ? 'right-0' : 'left-0'
      } opacity-0 transition-all ease-in-out duration-[200ms] w-0 h-0`;
    }

    // Get default styles for visible images
    const baseStyle = `opacity-100 duration-[200ms] ease-in-out`;
    const zIndexAndSize = {
      0: `z-30 w-[120px] md:w-40 lg:w-60 `,
      1: `z-40 w-[113px] md:w-[170px] lg:w-[341px] `,
      2: `z-30 w-[120px] md:w-40 lg:w-60 `,
    };

    // Specific positioning logic
    let positionStyle = '';

    switch (visibleImages.indexOf(imageIndex)) {
      case 0:
        positionStyle = 'left-0 transition-all';
        break;
      case 1:
        positionStyle = !movingLeft.current
          ? 'left-1/2 transform -translate-x-1/2  transition-all'
          : 'right-1/2 transform translate-x-1/2  transition-all';
        break;
      case 2:
        positionStyle = 'right-0 transition-all';
        break;
      default:
        break;
    }

    return `${positionStyle} ${baseStyle} ${
      zIndexAndSize[visibleImages.indexOf(imageIndex)]
    }`;
  };

  return (
    <div>
      <div className="relative flex items-center h-[360px] lg:w-[600px]">
        {allNodes.map((r, index) => {
          return (
            <div className={`absolute h-auto ${getCss(index)} transform-gpu`}>
              <div
                onClick={() =>
                  visibleImages.indexOf(index) === 0
                    ? decrement()
                    : visibleImages.indexOf(index) === 2 && increment()
                }
              >
                <AttendReason
                  key={r.id}
                  title={r.title}
                  subtitle={r.subtitle}
                  isCenter={visibleImages.indexOf(index) === 1}
                  brightness={`${getBrightness(index)}`}
                  image={r.icon}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-align lg:w-[600px] mt-10">
        <div
          className="bg-[#ABAAAA] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full m-2"
          onMouseEnter={(e) =>
            (e.currentTarget.className =
              'bg-[#e91c24] w-[40px] h-[40px] -translate-x-1 transition-all ease-in-out duration-300 rounded-full m-2')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.className =
              'bg-[#ABAAAA] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full m-2')
          }
          onClick={() => {
            decrement();
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path
              className={`transition-all ease-in-out duration-300`}
              d="M11.9393 18.9393C11.3536 19.5251 11.3536 20.4749 11.9393 21.0607L21.4853 30.6066C22.0711 31.1924 23.0208 31.1924 23.6066 30.6066C24.1924 30.0208 24.1924 29.0711 23.6066 28.4853L15.1213 20L23.6066 11.5147C24.1924 10.9289 24.1924 9.97919 23.6066 9.3934C23.0208 8.80761 22.0711 8.80761 21.4853 9.3934L11.9393 18.9393ZM14.5 18.5H13V21.5H14.5V18.5Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="bg-[#ABAAAA] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full m-2"
          onMouseEnter={(e) =>
            (e.currentTarget.className =
              'bg-[#e91c24] w-[40px] h-[40px] translate-x-1 transition-all ease-in-out duration-300 rounded-full m-2')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.className =
              'bg-[#ABAAAA] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full m-2')
          }
          onClick={() => {
            increment();
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path
              className={`transition-all ease-in-out duration-300`}
              d="M26.0607 21.0607C26.6464 20.4749 26.6464 19.5251 26.0607 18.9393L16.5147 9.3934C15.9289 8.80761 14.9792 8.80761 14.3934 9.3934C13.8076 9.97918 13.8076 10.9289 14.3934 11.5147L22.8787 20L14.3934 28.4853C13.8076 29.0711 13.8076 30.0208 14.3934 30.6066C14.9792 31.1924 15.9289 31.1924 16.5147 30.6066L26.0607 21.0607ZM23.5 21.5L25 21.5L25 18.5L23.5 18.5L23.5 21.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;
