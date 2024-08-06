import React from 'react';
import './HomeImageCarousel.css'; // Import your CSS file
import { GatsbyImage } from 'gatsby-plugin-image';
import { useState, useEffect } from 'react';
import HomeGalleryDots from './HomeGalleryDots';
const HomeImageCarousel = (props) => {
  const [translateAmount, setTranslateAmount] = useState(0);

  useEffect(() => {
    setTranslateAmount(0);
  }, []);

  const getActive = () => {
    return translateAmount / width;
  };

  const width = 267.0;
  const height = 306.0;
  const offset = 70;

  const allImages = props.images;
  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{ height: `${height + offset}px` }}
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
