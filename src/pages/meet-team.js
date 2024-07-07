import React from "react";
import { graphql } from "gatsby";
import TeamMembers from "../components/team-components/TeamMembers";

const MeetTeam = ({data}) => {
    const members = data.allContentfulTeamMember.nodes
    return(
      
        <TeamMembers members={members}/>
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