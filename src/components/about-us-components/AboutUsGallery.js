import React from "react";
import GalleryImage from "./GalleryImage"

const AboutUsGallery = (props) => {

  return (
    <div className="flex flex-wrap justify-center gap-4 overflow-hidden">
        {props.images.map(image => (
            <GalleryImage key={image.galleryImage.id} url={image.galleryImage.url} description={image.galleryImage.description} />
        ))}
      {/* </div> */}
    </div>
  )
}



export default AboutUsGallery
