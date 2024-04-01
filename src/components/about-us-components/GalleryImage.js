import React from "react";

const GalleryImage = (props) => {
    return (
        <div className="flex flex-wrap">
            <img className="object-cover object-center w-full h-40 max-w-full rounded-lg" src={props.url} alt={props.description}/>
        </div>
    )
}

export default GalleryImage;