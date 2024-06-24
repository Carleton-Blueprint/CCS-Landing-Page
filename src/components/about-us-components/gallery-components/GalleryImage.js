import React from 'react'
import { GatsbyImage  } from "gatsby-plugin-image"
const GalleryImage = (props) => {
    return (
        <div className="flex flex-wrap w-full h-full">
        
            <GatsbyImage    
                className={`object-cover object-center h-full w-full rounded-lg drop-shadow-md ${props.brightness}`} 
                image={props.url} 
                alt={props.description}
            />
        </div>
    )
  
}

export default GalleryImage