import React from 'react';

const HomeGalleryDots = (props) => {
  const translateIncrement = props.increment;
  const mapDots = Array(props.amount).fill(null);
  const activeImage = props.activeImage;
  const handleImageNav = (translateX) => props.callbackChangeImage(translateX);

  const r = props.size === 'lg' ? 8.5 : props.size === 'sm' ? 5.5 : 7;
  const cxy = props.size === 'lg' ? 9 : props.size === 'sm' ? 6 : 7.5;

  const handleDotClick = (index) => {
    console.log(index);
    handleImageNav(translateIncrement * index);
  };
  return (
    <div className="flex gap-3 pt-8 w-fit">
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
              r={r}
              fill={`${activeImage === index ? '#08679D' : '#D9D9D9'}`}
              className=" transition-color ease-in-out duration-200"
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
