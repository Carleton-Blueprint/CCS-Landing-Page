import React from 'react'

const GalleryImage = (props) => {
 
    return (
        <div className="flex flex-wrap w-full h-full">
            
            <img    
                className={`object-cover object-center h-full w-full rounded-lg drop-shadow-md ${props.brightness}`} 
                src={props.url} 
                alt={props.description}
            />
            
            
        </div>
    )
  
}

export default GalleryImage