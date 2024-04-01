import React from "react"
import AboutUsGallery from "../components/about-us-components/AboutUsGallery"
import { graphql } from "gatsby"
import {useEffect, useState} from "react"

const ImageGallery = ({ data }) => {
    const allImages = data.allContentfulAboutUsGallery.nodes //all images the AboutUsGallery
    const numImages = 4; // number of images to be displayed at once
    const [displayImages, setDisplayImages] = useState(allImages.slice(0, numImages)) //images to be displayed (passed into AboutUsGallery component)
    const [index, setIndex] = useState(0); //keep track of current display photos so they can shifted over at intervals

    useEffect(() => {
        //interval to change the displayImages on (3 seconds)
        const interval = setInterval(() => {

            //increase index, correct the value if its greater than the number of total images
            setIndex(prevIndex => {
                let newIndex = prevIndex + 1;
                if (newIndex >= allImages.length) {
                    newIndex %= allImages.length;
                }
                return newIndex;
            });
            
         }, 3000)

         
         return () => clearInterval(interval);
    }, []);
        
    useEffect(() => {
        if (index >= allImages.length) {
            setIndex(index % allImages.length);
        }

        //if slicing allImages won't go out of bounds
        if (index+numImages < allImages.length) {
            setDisplayImages(allImages.slice(index, index+numImages))
        } else {
            setDisplayImages(allImages.slice(index).concat(allImages.slice(0, numImages-(allImages.length-index))))
        }

    }, [index, allImages])

    return (
    <AboutUsGallery images={displayImages} />
    );
};

// query to return all assests from the AboutUsGallery
export const query = graphql`
  query {
    allContentfulAboutUsGallery {
      nodes {
        galleryImage {
          id
          url
          description
        }
      }
    }
  }
`;

export default ImageGallery;