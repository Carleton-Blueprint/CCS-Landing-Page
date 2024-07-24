import React from 'react';
import { graphql } from 'gatsby';
import EventBackButton from '../components/events-components/EventBackButton';
import EventLinkButton from '../components/events-components/EventLinkButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import './eventTemplate.css';

export const query = graphql`
  query ($slug: String!) {
    contentfulFeaturedEvent(
      slug: { eq: $slug }
      photoGallery: { elemMatch: {} }
    ) {
      displayTitle
      startDate
      location
      longDescription {
        longDescription
      }
      primaryImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
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
  const eventDate = event.startDate;
  const convertMonthIntToShort = (n) => {
    switch (n) {
      case 1:
        return 'Jan';
      case 2:
        return 'Feb';
      case 3:
        return 'Mar';
      case 4:
        return 'Apr';
      case 5:
        return 'May';
      case 6:
        return 'Jun';
      case 7:
        return 'Jul';
      case 8:
        return 'Aug';
      case 9:
        return 'Sep';
      case 10:
        return 'Oct';
      case 11:
        return 'Nov';
      case 12:
        return 'Dec';
      default:
        return 'ERROR - eventTemplate.js unexpected case';
    }
  };
  const handleCopy = async (e, content) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.error('Unable to copy to clipboard:', error);
    }
  };
  return (
    <>
      {event && (
        <div>
          <div className="fitdiv">
            <div className="backgroundImg">
              {event.primaryImage && (
                <GatsbyImage
                  image={event.primaryImage.gatsbyImageData}
                  alt="primary image"
                  loading="lazy"
                  className="gatsbyImage"
                />
              )}
            </div>

            <div className="gatsbyImage-bg">
              <div className="main-container">
                <div className="back-container">
                  <EventBackButton />
                  <div
                    className="link-container"
                    onClick={(e) => handleCopy(e, window.location.href)}
                    onTouchEnd={(e) => handleCopy(e, window.location.href)}
                  >
                    <EventLinkButton />
                  </div>
                </div>
                <div className="titleSection">
                  {event.displayTitle && (
                    <div className="eventTitle">{event.displayTitle}</div>
                  )}
                  <div className="date-container">
                    {eventDate && (
                      <>
                        <div className="date-day font-normal">
                          {eventDate.slice(8)}
                        </div>
                        <div className="date-month">
                          {convertMonthIntToShort(
                            parseInt(eventDate.slice(5, 7))
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {event.location && (
                  <div className="locationEvent">
                    <span className="font-semibold locationText">
                      Location:
                    </span>
                    {event.location}
                  </div>
                )}
                {event.longDescription && (
                  <div className="descriptionEvent">
                    <span className="font-semibold descriptionText">
                      About:
                    </span>
                    {event.longDescription.longDescription}
                  </div>
                )}
                <div className="galleryText font-semibold">Photo Gallery</div>
                <div className="flex eventGalleryContainer">
                  {event.photoGallery &&
                    event.photoGallery.map((image, index) => (
                      <div key={index} className="eventGalleryImageContainer">
                        <GatsbyImage
                          image={image.gatsbyImageData}
                          alt="event gallery image"
                          className="eventGalleryImage"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventTemplate;
