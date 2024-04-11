import React from "react"
import AboutUsGallery from "../components/about-us-components/AboutUsGallery"
import { graphql } from "gatsby"

const ImageGallery = ({ data }) => {
    const galleryImages = data.allContentfulAboutUsGallery.nodes //all images the AboutUsGallery

    return (
    <AboutUsGallery images={galleryImages} />
    )
}

// query to return all galleryImages from the AboutUsGallery
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