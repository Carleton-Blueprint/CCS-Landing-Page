import React, { useEffect, useState } from 'react';
import AboutUsGallery from '../components/about-us-components/gallery-components/AboutUsGallery';
import WhyAttend from '../components/about-us-components/WhyAttend';
import Statistics from '../components/about-us-components/AboutUsStatistics';
import { graphql } from 'gatsby';
import { Seo } from '../components/base/Seo';
import Header from '../components/base/Header';
import background from '../images/about-us-header.svg';
import NavigationBar from '../components/base/NavigationBar/NavigationBar';
import WhyAttendMobile from '../components/about-us-components/WhyAttendMobile';
import AboutUsGalleryMobile from '../components/about-us-components/gallery-components/AboutUsGalleryMobile';
const ImageGallery = ({ data }) => {
  const galleryImages = data.allContentfulAboutUsGallery.nodes; //all images the AboutUsGallery
  const bodySections = data.contentfulAboutPage.aboutUsSection;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to update the state based on the current window width
    if (!window) {
      return;
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <>
      <NavigationBar pathname="/about-us" />
      <Header title="About Us" background={background} />
      <div className="flex flex-col ">
        <div className="flex items-center justify-center">
          {!isMobile ? (
            <AboutUsGallery images={galleryImages} />
          ) : (
            <AboutUsGalleryMobile images={galleryImages} />
          )}
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col justify-center w-4/5 gap-3 lg:gap-14">
            {bodySections.map((node) => (
              <div>
                <div className="font-poppins text-2xl md:text-3xl lg:text-5xl font-semibold text-[#ABAAAA]">
                  {node.title}
                </div>
                <div className="pt-3 text-sm font-poppins md:text-md lg:text-lg lg:pt-8">
                  {node.bodyText.bodyText}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="font-poppins text-2xl md:text-3xl lg:text-5xl font-semibold text-[#ABAAAA] flex justify-center pt-16">
          <p className="w-4/5 ">Why Attend?</p>
        </div>
        <div className="flex justify-center pt-16">
          {!isMobile ? (
            <WhyAttend reasons={data.allContentfulAttendReason.nodes} />
          ) : (
            <WhyAttendMobile reasons={data.allContentfulAttendReason.nodes} />
          )}
        </div>

        <div className="flex justify-center p-4">
          <Statistics stats={data.allContentfulStatistic.nodes} />
        </div>
      </div>
    </>
  );
};

// query to return all galleryImages from the AboutUsGallery
export const query = graphql`
  query {
    contentfulAboutPage {
      aboutUsSection {
        title
        bodyText {
          bodyText
        }
      }
    }
    allContentfulStatistic {
      nodes {
        bottomSubtitle
        subtitle1
        statistic
        id
      }
    }
    allContentfulAttendReason {
      nodes {
        subtitle
        title
        id
        icon {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 600
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    allContentfulAboutUsGallery {
      nodes {
        galleryImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 600
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;

export const Head = () => (
  <Seo title="About" description="This is the about page" />
);

export default ImageGallery;
