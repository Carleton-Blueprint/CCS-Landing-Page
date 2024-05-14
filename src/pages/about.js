import React from "react";
import NavigationBar from "../components/base/NavigationBar";
import { Seo } from "../components/base/Seo";
import AboutUsStatistics from "../components/about-us-components/AboutUsStatistics";
import { graphql } from "gatsby";

const About = ({data}) => {
  return (
    <div>
      <NavigationBar pathname={"/about"} />
      <AboutUsStatistics stats={data.allContentfulStatistic.nodes}/>
    </div>
  );
};

export default About;

export const Head = () => (
  <Seo title="About" description="This is the about page" />
);

export const query = graphql`
query MyQuery {
  allContentfulStatistic {
    nodes {
      bottomSubtitle
      subtitle1
      statistic
      id
    }
  }
}
`;