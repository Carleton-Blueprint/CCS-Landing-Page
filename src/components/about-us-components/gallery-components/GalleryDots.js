import React from 'react';

const GalleryDots = (props) => {
  const handleImageNav = (distance, direction) =>
    props.callbackChangeImage(distance, direction);
  const imagesLength = props.imagesLength;
  const mapDots = Array(imagesLength).fill(null);
  const activeImage = props.activeImage;

  const handleDotClick = (index) => {
    let skipDistanceLeft, skipDistanceRight;

    if (index === activeImage) {
      handleImageNav(-1, false);
    } else {
      if (index > activeImage) {
        skipDistanceRight = index - activeImage;
        skipDistanceLeft = activeImage + imagesLength - index;
      } else {
        skipDistanceLeft = activeImage - index;
        skipDistanceRight = index + imagesLength - activeImage;
      }

      if (skipDistanceRight <= skipDistanceLeft) {
        handleImageNav(skipDistanceRight, true);
      } else {
        handleImageNav(skipDistanceLeft, false);
      }
    }
  };

  return (
    <div className="flex gap-3 pt-12 w-fit">
      {mapDots.map((_, index) => (
        <div key={index}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-[120%] delay-100 ease-out duration-200"
          >
            <circle
              cx="9"
              cy="9"
              r="8.5"
              fill={`${activeImage === index ? '#08679D' : '#D9D9D9'}`}
              className=" transition-all ease-in-out duration-200"
              onMouseEnter={(e) => e.target.setAttribute('fill', '#0292B7')}
              onMouseLeave={(e) =>
                activeImage === index
                  ? e.target.setAttribute('fill', '#08679D')
                  : e.target.setAttribute('fill', '#D9D9D9')
              }
              onClick={(e) => {
                e.preventDefault();
                handleDotClick(index);
              }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default GalleryDots;
