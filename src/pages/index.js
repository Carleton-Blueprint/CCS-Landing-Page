import React from 'react';
import NavigationBar from '../components/base/NavigationBar';
import Form from '../components/contact-us-components/Form';
import Header from '../components/base/Header';
import Home from '../components/home-components/Home';
import { Seo } from '../components/base/Seo';
import { graphql } from 'gatsby';
import background from '../images/csshomepage.png';
import HomeImageCarousel from '../components/home-components/home-gallery-components/HomeImageCarousel';

const HomePage = ({ data }) => {
  return (
    <div>
      <NavigationBar pathname={'/'} />
      <Home data={data} />
    </div>
  );
};

export const query = graphql`
  query {
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
export default HomePage;
// query to return all galleryImages from the AboutUsGallery

export const Head = () => (
  <Seo title="Home Page" description="This is the home page" />
);
