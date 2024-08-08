import React from 'react';
import { graphql } from 'gatsby';
import GetInvolvedCard from '../components/get-involved-components/GetInvolvedCard';
import background from '../images/get-involved-header.svg';
import Header from '../components/base/Header';
import Layout from '../components/base/Layout';
import Bubble from '../components/animation-wrappers/Bubble';
const GetInovlved = ({ data, location }) => {
  return (
    <Layout pathname={location.pathname} backgroundColour="black">
      <Header title="Get Involved" background={background} />
      <div className="bg-black">
        <Bubble
          renderObjects={data.allContentfulGetInvolvedCard.nodes.map(
            (reason) => (
              <GetInvolvedCard data={reason} />
            )
          )}
          wrapperClass={'flex flex-wrap justify-center w-full'}
          sharedObjectClass={'flex justify-center m-4 transform-gpu'}
          duration={300}
          delay={100}
        />
      </div>
    </Layout>
  );
};

export default GetInovlved;

export const query = graphql`
  query {
    allContentfulGetInvolvedCard {
      nodes {
        title
        linkTitle
        link
        description {
          description
        }
        icon {
          file {
            url
          }
          description
        }
      }
    }
  }
`;
