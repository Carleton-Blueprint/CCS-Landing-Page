import React from 'react';

const HomeGalleryDots = (props) => {
  const translateIncrement = props.increment ? ;
  const mapDots = Array(props.amount).fill(null);
  const activeImage = props.activeImage;

  const radius = 6;
  const cxy = 6;

  const handleDotClick = (index) => {
    props.setTranslateAmount(translateIncrement * index);
  };
  return (
    <div className="flex gap-3 w-fit">
      {mapDots.map((_, index) => (
        <div key={index}>
          <svg
            width={cxy * 2}
            height={cxy * 2}
            viewBox={`0 0 ${cxy * 2} ${cxy * 2}`}
            fill="none"
            className="hover:scale-[120%] delay-100 ease-out duration-200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={cxy}
              cy={cxy}
              r={radius}
              fill={`${activeImage === index ? '#08679D' : '#D9D9D9'}`}
              className="duration-200 ease-in-out transition-color"
              onMouseEnter={(e) => e.target.setAttribute('fill', '#0292B7')}
              onMouseLeave={(e) =>
                activeImage === index
                  ? e.target.setAttribute('fill', '#08679D')
                  : e.target.setAttribute('fill', '#D9D9D9')
              }
              onClick={() => handleDotClick(index)}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default HomeGalleryDots;
