import React from "react";
import { graphql } from "gatsby";
import TeamMembers from "../components/team-components/TeamMembers";
import Header from '../components/base/Header'
import background from '../images/meet-the-team-header.svg'
import NavigationBar from '../components/base/NavigationBar'

const MeetTeam = ({data}) => {
    const members = data.allContentfulTeamMember.nodes
    return(
      <>
        <NavigationBar pathname={'/meet-team'}/>
        <Header title='Meet the Team' background={background}/>
        <div className="">
          <TeamMembers members={members}/>
        </div>
      </>
    )
}

export const query = graphql`
query MyQuery {
    allContentfulTeamMember {
      nodes {
        id
        name
        position1
        position2
        year
        description
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
  }`

export default MeetTeam;