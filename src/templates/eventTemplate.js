import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    contentfulSpecificEventPage(slug: { eq: $slug }) {
      eventName
    }
  }
`;

const EventTemplate = ({ data }) => {
  const event = data.contentfulSpecificEventPage;

  return (
    <div>
      <h1>{event.eventName}</h1>
    </div>
  );
};

export default EventTemplate;
