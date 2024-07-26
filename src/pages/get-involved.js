import React from 'react';
import { graphql } from 'gatsby';
import GetInvolvedCard from '../components/get-involved-components/GetInvolvedCard';
import background from '../images/get-involved-header.svg';
import Header from '../components/base/Header';
import Layout from '../components/base/Layout';

const GetInovlved = ({ data, location }) => {
  return (
    <Layout pathname={location.pathname}>
      <Header title="Get Involved" background={background} />
      <div className="bg-black">
        <div className="flex flex-wrap justify-center w-full">
          {data.allContentfulGetInvolvedCard.nodes.map((reason) => (
            <div className="flex justify-center m-4">
              <GetInvolvedCard data={reason} />
            </div>
          ))}
        </div>
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
