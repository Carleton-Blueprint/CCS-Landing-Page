import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import WhyAttend from '../components/about-us-components/WhyAttend'
import { Seo } from '../components/base/Seo'
import { graphql } from 'gatsby'

const About = ({data}) => {
  return (
    <>
      <div><NavigationBar pathname={'/about'}/></div>
      <WhyAttend reasons = {data.allContentfulJoinReason.nodes}/>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulJoinReason {
      nodes {
        reason
        id
      }
    }
  } 
`

export default About

export const Head = () => (
  <Seo title = "About" description="This is the about page"/>
)