import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
const GalleryImage = (props) => {
  return (
    <div
      onClick={() => props.clicked()}
      className={`transition-transform duration-200 ease-out flex flex-wrap w-full h-full ${
        props.indexRelative === 2
          ? 'hover:scale-[115%]'
          : props.indexRelative === 1 || props.indexRelative === 3
          ? 'hover:scale-110'
          : 'hover:scale-105'
      }`}
    >
      <GatsbyImage
        className={`object-cover object-center h-full w-full rounded-lg drop-shadow-md ${props.brightness}`}
        image={props.url}
        alt={props.description}
      />
    </div>
  );
};

export default GalleryImage;
