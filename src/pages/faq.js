import { graphql } from 'gatsby';
import React from 'react';
import NavigationBar from '../components/base/NavigationBar';
import Accordian from '../components/faq-components/Accordian';
import Header from '../components/base/Header';
import background from '../images/faq-header.svg';
import Layout from '../components/base/Layout';

function Faq({ data, location }) {
  return (
    <Layout pathname={location.pathname}>
      <Header title="FAQ" background={background} />
      <div className="container">
        <Accordian data={data} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulFaq {
      nodes {
        faqQuestion
        faqAnswer {
          raw
        }
      }
    }
  }
`;

export default Faq;
