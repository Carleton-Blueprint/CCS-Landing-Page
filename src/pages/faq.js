import { graphql } from 'gatsby';
import React from 'react';
import Accordian from '../components/faq-components/Accordian';
import Header from '../components/base/Header';
import background from '../images/faq-header.svg';
import Layout from '../components/base/Layout';
import AppearFrom from '../components/animation-wrappers/AppearFrom';

function Faq({ data, location }) {
  return (
    <div className="bg-gradient-to-b from-60% from-black to-[#5F0B0F]">
      <Layout pathname={location.pathname}>
        <Header title="FAQ" background={background} />
        <AppearFrom direction="left">
          <div className="container ">
            <Accordian data={data} />
          </div>
        </AppearFrom>
      </Layout>
    </div>
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
