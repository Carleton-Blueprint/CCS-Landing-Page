import React from 'react';
import { useState } from 'react';
import GalleryImage from './GalleryImage';
const AboutUsGalleryMobile = (props) => {
  const allImages = props.images;
  const imagesLength = allImages.length;
  const [visibleIndex, setVisibleIndex] = useState(0);

  return (
    <div className="flex flex-col">
      {allImages.map((image, index) => {
        return (
          <div
            className={` transition-opacity duration-200 ease-in-out ${
              visibleIndex !== index
                ? 'p-0 w-0 h-0 opacity-0'
                : 'px-10 h-44 opacity-100'
            }`}
          >
            {visibleIndex === index && (
              <GalleryImage
                key={image.galleryImage.id}
                clicked={() => {}}
                url={image.galleryImage.gatsbyImageData}
                description={image.galleryImage.description}
                index={index}
              />
            )}
          </div>
        );
      })}
      <div className="flex justify-center py-10 gap-10">
        <div
          className="bg-[#ABAAAA] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full"
          onMouseEnter={(e) =>
            (e.currentTarget.className =
              'bg-[#e91c24] w-[40px] h-[40px] -translate-x-1 transition-all ease-in-out duration-300 rounded-full')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.className =
              'bg-[#ABAAAA] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full')
          }
          onClick={() =>
            setVisibleIndex((prev) =>
              prev - 1 === -1 ? imagesLength - 1 : prev - 1
            )
          }
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
          className="bg-[#ABAAAA] w-[40px] h-[40px] transition-all ease-in-out duration-300 rounded-full"
          onMouseEnter={(e) =>
            (e.currentTarget.className =
              'bg-[#e91c24] w-[40px] h-[40px] translate-x-1 transition-all ease-in-out duration-300 rounded-full')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.className =
              'bg-[#ABAAAA] w-[40px] h-[40px] translate-x-0 transition-all ease-in-out duration-300 rounded-full')
          }
          onClick={() => setVisibleIndex((prev) => (prev + 1) % imagesLength)}
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

export default AboutUsGalleryMobile;
