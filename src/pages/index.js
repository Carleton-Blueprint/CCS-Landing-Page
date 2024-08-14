import React from 'react';
import Home from '../components/home-components/Home';
import { Seo } from '../components/base/Seo';
import { graphql } from 'gatsby';
import Layout from '../components/base/Layout';

const HomePage = ({ data }) => {
  return (
    <Layout pathname={'/'}>
      <Home data={data} />
    </Layout>
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

export const Head = () => <Seo title="Home" description="Welcome to CCS" />;
