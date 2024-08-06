import React from 'react';
import './HomeImageCarousel.css'; // Import your CSS file
import { GatsbyImage } from 'gatsby-plugin-image';
import { useState, useEffect } from 'react';
import HomeGalleryDots from './HomeGalleryDots';
const HomeImageCarousel = (props) => {
  const [translateAmount, setTranslateAmount] = useState(0);

  useEffect(() => {
    setTranslateAmount(0);
  }, [props.size]);

  const getActive = () => {
    return translateAmount / width;
  };
  let width = 267.0;
  let height = 306.0;

  if (props.size === 'lg') {
    width *= 1.1;
    height *= 1.1;
  } else if (props.size === 'sm') {
    width *= 0.5;
    height *= 0.5;
  } else if (props.size === 'md') {
    width *= 0.8;
    height *= 0.8;
  }

  const getOffset = () => {
    return props.size === 'lg'
      ? 70
      : props.size === 'sm'
      ? 30
      : props.size === 'md'
      ? 45
      : 55;
  };

  const allImages = props.images;
  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{ height: `${height + getOffset()}px` }}
    >
      <div
        className="absolute z-30 transition-all duration-150 ease-out masked-div hover:scale-110"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="flex w-fit">
          {allImages.map((image) => (
            <div
              style={{ transform: `translateX(-${translateAmount}px)` }}
              className="transition-all duration-150 ease-out"
            >
              <GatsbyImage
                style={{ width: `${width}px`, height: `${height}px` }}
                className=""
                image={image.galleryImage.gatsbyImageData}
                alt={image.galleryImage.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 z-30 ">
        <HomeGalleryDots
          size={props.size}
          amount={allImages.length}
          increment={width}
          activeImage={getActive()}
          callbackChangeImage={(newTranslateAmount) =>
            setTranslateAmount(newTranslateAmount)
          }
        />
      </div>
      <div
        className="absolute z-0 scale-125 opacity-50 masked-div "
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="w-full h-full bg-white"></div>
      </div>
    </div>
  );
};

export default HomeImageCarousel;
