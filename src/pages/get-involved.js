import React, { useState, useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import GetInvolvedCard from '../components/get-involved-components/GetInvolvedCard';
import background from '../images/get-involved-header.svg';
import Header from '../components/base/Header';
import Layout from '../components/base/Layout';
import Bubble from '../components/animation-wrappers/Bubble';
import { Seo } from '../components/base/Seo';

const GetInovlved = ({ data, location }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <Layout pathname={location.pathname} backgroundColour="black">
      <Header title="Get Involved" background={background} />
      <div ref={ref} className="bg-black">
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
          isActive={isInView}
        />
      </div>
    </Layout>
  );
};

export default GetInovlved;

export const Head = () => (
  <Seo title="About" description="Findout how to get involved with CCS" />
);

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
