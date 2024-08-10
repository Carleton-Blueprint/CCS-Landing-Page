import React from 'react';
import { useState, useRef, useEffect } from 'react';
import GalleryImage from './GalleryImage';
import GalleryDots from './GalleryDots';
import Bubble from '../../animation-wrappers/Bubble';
const AboutUsGallery = (props) => {
  const allImages = props.images;
  const movingLeft = useRef(false);
  const imagesLength = allImages.length;
  const startIndex = useRef(0);
  const animationTimeInt = useRef(200);
  const animationTimeString = useRef('duration-[200ms]');
  const animationTypeString = useRef('ease-in-out');
  const isRunning = useRef(false);
  const [visibleImages, setVisibleImages] = useState([0, 1, 2, 3, 4]);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  const generateVisibleImages = (start, left) => {
    movingLeft.current = left;
    let pushVisibleImages = [];

    for (let i = start; i < start + 5; i++) {
      pushVisibleImages.push(i % imagesLength);
    }
    return pushVisibleImages;
  };
  const getTranslateX = (index) => {
    const position = visibleImages.indexOf(index);
    switch (position) {
      case 0:
      case 4:
        return { x: 0 };
      case 1:
      case 2:
      case 3:
        return { x: '-50%' };
    }
  };

  const increment = (n, isInitial = true) => {
    if (n <= 0) {
      isRunning.current = false;
      animationTypeString.current = 'ease-in-out';
      return;
    }

    // Set the animation type to ease in out if its just a one move over. set to linear if the move is more than one.
    animationTypeString.current =
      n === 1 && isInitial ? 'ease-in-out' : 'ease-linear';

    const updateImages = () => {
      const start = (startIndex.current + 1) % imagesLength;
      startIndex.current = start;
      setVisibleImages(generateVisibleImages(startIndex.current, false));
      increment(n - 1, false);
    };

    // Execute updateImages immediately if isInitial, else with a delay
    if (isInitial) {
      updateImages();
    } else {
      setTimeout(updateImages, animationTimeInt.current);
    }
  };

  const decrement = (n, isInitial = true) => {
    if (n <= 0) {
      isRunning.current = false;
      animationTypeString.current = 'ease-in-out';
      return;
    }
    // Set the animation type to ease in out if its just a one move over. set to linear if the move is more than one.
    animationTypeString.current =
      n === 1 && isInitial ? 'ease-in-out' : 'ease-linear';

    const updateImages = () => {
      let start = startIndex.current - 1;
      if (start === -1) start = imagesLength - 1; // Wrap around if index goes below 0
      startIndex.current = start;
      setVisibleImages(generateVisibleImages(startIndex.current, true));
      decrement(n - 1, false);
    };

    // Execute updateImages immediately if isInitial, else with a delay
    if (isInitial) {
      updateImages();
    } else {
      setTimeout(updateImages, animationTimeInt.current);
    }
  };

  const handleImageNav = (distance, direction) => {
    if (distance === -1 || isRunning.current) {
      return;
    }
    setAnimationTime(distance);
    isRunning.current = true;
    if (direction) {
      increment(distance);
    } else {
      decrement(distance);
    }
  };

  const getBrightness = (imageIndex) => {
    const index = visibleImages.indexOf(imageIndex);
    if (index === -1) {
      return 'brightness-0';
    }
    const brightnessArray = [
      'brightness-[30%]',
      'brightness-50',
      'brightness-110',
      'brightness-50',
      'brightness-[30%]',
    ];
    return brightnessArray[index];
  };
  const getCss = (imageIndex) => {
    // Early return for images not currently visible
    if (!visibleImages.includes(imageIndex)) {
      return `${
        movingLeft.current ? 'right-0' : 'left-0'
      } opacity-0 transition-all ${animationTypeString.current} ${
        animationTimeString.current
      } w-0 h-0`;
    }

    // Get default styles for visible images
    const baseStyle = `absolute transform-gpu opacity-100 ${animationTypeString.current} ${animationTimeString.current}`;
    const zIndexAndSize = {
      0: `z-20 w-[80px] h-14 md:w-[440px] md:h-[150px] lg:w-60 lg:h-48`,
      1: `z-30 w-[120px] h-[88px] md:w-[400px] md:h-[240px] lg:w-80 lg:h-64`,
      2: `z-40 w-[160px] h-[120px] md:w-[400px] md:h-[300px] lg:w-[400px] lg:h-80`,
      3: `z-30 w-[120px] h-[88px] md:w-[400px] md:h-[240px] lg:w-80 lg:h-64`,
      4: `z-20 w-[80px] h-14 md:w-[440px] md:h-[150px] lg:w-60 lg:h-48`,
    };

    // Specific positioning logic
    let positionStyle = '';
    switch (visibleImages.indexOf(imageIndex)) {
      case 0:
        positionStyle = `left-0 ${
          movingLeft.current ? 'transition-opacity' : 'transition-all'
        }`;
        break;
      case 1:
        positionStyle = 'left-1/4 transform transition-all';
        break;
      case 2:
        positionStyle = 'left-1/2 transform transition-all';
        break;
      case 3:
        positionStyle = 'left-3/4 transform transition-all';
        break;
      case 4:
        positionStyle = `right-0 ${
          movingLeft.current ? 'transition-all' : 'transition-opacity'
        }`;
        break;
      default:
        break;
    }

    return `${positionStyle} ${baseStyle} ${
      zIndexAndSize[visibleImages.indexOf(imageIndex)]
    }`;
  };

  const setAnimationTime = (skipDistance) => {
    let duration, durationString;

    switch (skipDistance) {
      case 1:
        duration = 200;
        durationString = 'duration-[200ms]';
        break;
      case 2:
      case 3:
        duration = 100;
        durationString = 'duration-[100ms]';
        break;
      default:
        duration = 50;
        durationString = 'duration-[50ms]';
        break;
    }
    animationTimeString.current = durationString;
    animationTimeInt.current = duration;
  };

  const handleImageClick = (relativeIndex) => {
    switch (relativeIndex) {
      case 0:
        setAnimationTime(2);
        decrement(2);
        break;
      case 1:
        setAnimationTime(1);
        decrement(1);
        break;
      case 3:
        setAnimationTime(1);
        increment(1);
        break;
      case 4:
        setAnimationTime(2);
        increment(2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[90%] lg:w-fit mb-5">
      <div className="flex items-center justify-between gap-6 duration">
        <div
          className={`flex items-center justify-center transition-opacity opacity-0 ease-in-out duration-200 delay-[1200ms] ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            className="bg-[#ABAAAA] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full"
            onMouseEnter={(e) =>
              (e.currentTarget.className =
                'bg-brightRed w-[40px] h-[40px] -translate-x-1 transition-all ease-in-out duration-300 rounded-full')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.className =
                'bg-[#ABAAAA] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full')
            }
            onClick={() => {
              setAnimationTime(1);
              decrement(1);
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
          </button>
        </div>
        <div ref={ref}>
          <Bubble
            renderObjects={allImages.map((image, index) => (
              <GalleryImage
                key={image.galleryImage.id}
                url={image.galleryImage.gatsbyImageData}
                description={image.galleryImage.description}
                indexRelative={visibleImages.indexOf(index)}
                brightness={`${getBrightness(index)}`}
                clicked={() => handleImageClick(visibleImages.indexOf(index))}
              />
            ))}
            wrapperClass={
              'relative flex items-center h-80 w-[250px] lg:w-[945px]'
            }
            allObjectClass={new Array(imagesLength)
              .fill(0)
              .map((_, index) => getCss(index))}
            translations={new Array(imagesLength)
              .fill(0)
              .map((_, index) => getTranslateX(index))}
            delay={100}
            duration={200}
            direction={'ctr'}
            isActive={isInView}
          />
        </div>
        <div
          className={`flex items-center justify-center transition-opacity opacity-0 ease-in-out duration-200 delay-[1200ms] ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            className="bg-[#ABAAAA] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full"
            onMouseEnter={(e) =>
              (e.currentTarget.className =
                'bg-brightRed w-[40px] h-[40px] translate-x-1 transition-all ease-in-out duration-300 rounded-full')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.className =
                'bg-[#ABAAAA] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full')
            }
            onClick={() => {
              setAnimationTime(1);
              increment(1);
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
          </button>
        </div>
      </div>

      <div
        className={`flex items-center justify-center transition-opacity opacity-0 ease-in-out duration-200 delay-[800ms] ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <GalleryDots
          imagesLength={imagesLength}
          activeImage={visibleImages[2]}
          callbackChangeImage={(distance, direction) =>
            handleImageNav(distance, direction)
          }
        />
      </div>
    </div>
  );
};
export default AboutUsGallery;
