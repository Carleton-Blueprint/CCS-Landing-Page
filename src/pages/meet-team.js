import React from 'react';
import { graphql } from 'gatsby';
import TeamMembers from '../components/team-components/TeamMembers';
import Header from '../components/base/Header';
import background from '../images/meet-the-team-header.svg';
import Layout from '../components/base/Layout';
import { Seo } from '../components/base/Seo';

const MeetTeam = ({ data, location }) => {
  const members = data.allContentfulTeamMember.nodes;
  return (
    <Layout pathname={location.pathname}>
      <Header title="Meet the Team" background={background} />
      <div className="">
        <TeamMembers members={members} />
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Meet the Team" description="Meet the past and present CCS team" />
);

export const query = graphql`
  query MyQuery {
    allContentfulTeamMember {
      nodes {
        id
        name
        position1
        position2
        year
        linkedin
        standing
        program
        headshot {
          file {
            fileName
            url
          }
        }
      }
    }
  }
`;

export default MeetTeam;
