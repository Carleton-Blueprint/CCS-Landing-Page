import React from "react";
import { graphql } from "gatsby";
import EventBackButton from "../components/events-components/EventBackButton";
import { GatsbyImage } from "gatsby-plugin-image";
export const query = graphql`
  query ($slug: String!) {
  contentfulFeaturedEvent(slug: {eq: $slug}, photoGallery: {elemMatch: {}}) {
    displayTitle
    startDate
    location
    longDescription {
      longDescription
    }
    primaryImage{
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        width: 1920
        formats: [AUTO, WEBP, AVIF]
        aspectRatio:3
      )
      
    }
    photoGallery {
      gatsbyImageData(
        layout: CONSTRAINED
        placeholder: BLURRED
        width: 600
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`;

const EventTemplate = ({ data }) => {
  
  const event = data.contentfulFeaturedEvent;

  return (
    <>
    <div className="">
      <GatsbyImage image = {event.primaryImage.gatsbyImageData} alt="primary image" loading="lazy" className=" bg-red-300"/>
    </div>
    </>
  )
};

export default EventTemplate;
