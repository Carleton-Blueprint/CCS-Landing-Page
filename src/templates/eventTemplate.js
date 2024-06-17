import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
query($slug: String!) {
  contentfulFeaturedEvent(slug: { eq: $slug }) {
    displayTitle
    
  }
}
`;

const EventTemplate = ({ data }) => {
  const event = data.contentfulFeaturedEvent;

  return (
    <div>
      <h1>{event.displayTitle}</h1>
    </div>
  );
};

export default EventTemplate;
