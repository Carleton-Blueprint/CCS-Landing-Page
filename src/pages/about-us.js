import React from "react"
import AboutUsGallery from "../components/about-us-components/gallery-components/AboutUsGallery"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const ImageGallery = ({ data }) => {
    const galleryImages = data.allContentfulAboutUsGallery.nodes //all images the AboutUsGallery
   
    return (
      <>
        <AboutUsGallery images={galleryImages} />
      </>
    )
}

// query to return all galleryImages from the AboutUsGallery
export const query = graphql`
  query {
    allContentfulAboutUsGallery {
      nodes {
        id
        galleryImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 800
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }

`;

export default ImageGallery;