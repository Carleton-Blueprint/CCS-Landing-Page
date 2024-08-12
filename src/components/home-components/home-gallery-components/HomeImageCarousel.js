import React, { useState, useRef, useEffect } from 'react';
import './HomeImageCarousel.css'; // Import your CSS file
import { GatsbyImage } from 'gatsby-plugin-image';
import HomeGalleryDots from './HomeGalleryDots';

const HomeImageCarousel = (props) => {
  const [translateAmount, setTranslateAmount] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);

  const getActive = () => {
    if (!carouselWidth) return 0;
    return translateAmount / carouselWidth;
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    if (!window) return;

    // Set initial width
    handleResize();

    // Update width on window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allImages = props.images;
  console.log(allImages);
  return (
    <div
      ref={carouselRef}
      className="relative flex flex-col items-center justify-center 
      h-[376px] md:h-[423px] xl:w-[267px] xl:h-[306px]"
    >
      <div
        className="z-30 transition-all duration-150 ease-out masked-div hover:scale-[1.07] 
      w-[267px] h-[306px] md:w-[355px] md:h-[423px] xl:w-[267px] xl:h-[306px]"
      >
        <div className="flex">
          {allImages.map((image) => (
            <>
              <div
                style={{ transform: `translateX(-${translateAmount}px)` }}
                className="transition-all duration-150 ease-out"
              >
                <GatsbyImage
                  className="w-[267px] h-[306px] md:w-[355px] md:h-[423px] xl:w-[267px] xl:h-[306px]"
                  image={image.galleryImage.gatsbyImageData}
                  alt={image.galleryImage.description}
                />
              </div>
            </>
          ))}
        </div>
      </div>

      <div
        className="absolute z-10 scale-125 opacity-50 masked-div 
      w-[267px] h-[306px] md:w-[355px] md:h-[423px] xl:w-[267px] xl:h-[306px]"
      >
        <div className="w-full h-full bg-white"></div>
      </div>
      <div className="absolute z-30 bottom-2 sm:bottom-[-2vh] lg:bottom-[-3vh]">
        <HomeGalleryDots
          amount={allImages.length}
          activeImage={getActive()}
          increment={carouselWidth}
          setTranslateAmount={setTranslateAmount}
        />
      </div>
    </div>
  );
};

export default HomeImageCarousel;
