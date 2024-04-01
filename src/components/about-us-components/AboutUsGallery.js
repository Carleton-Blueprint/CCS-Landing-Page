import React from "react";
import GalleryImage from "./GalleryImage"

const AboutUsGallery = (props) => {

  return (
    <div className="flex flex-wrap">
      <div className={`grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-${props.images.length}`}>
        {props.images.map(image => (
            <GalleryImage key={image.galleryImage.id} url={image.galleryImage.url} description={image.galleryImage.description} />
        ))}
      </div>
    </div>
  )
}



export default AboutUsGallery
