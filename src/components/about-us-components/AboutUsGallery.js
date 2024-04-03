import React from "react"
import GalleryImage from "./GalleryImage"

const AboutUsGallery = (props) => {

  return (
    <div className="flex flex-nowrap gap-4 justify-center">
        {props.images.map(image => (
            <GalleryImage key={image.galleryImage.id} url={image.galleryImage.url} description={image.galleryImage.description} />
        ))}
        
    </div>
  )
}



export default AboutUsGallery
