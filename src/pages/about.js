import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import WhyAttend from '../components/about-us-components/WhyAttend'
import { Seo } from '../components/base/Seo'
import { graphql } from 'gatsby'
import AboutUsGallery from '../components/about-us-components/gallery-components/AboutUsGallery'

const About = ({data}) => {
  const galleryImages = data.allContentfulAboutUsGallery.nodes //all images the AboutUsGallery
  return (
    <>
      <div><NavigationBar pathname={'/about'}/></div>
      <WhyAttend reasons = {data.allContentfulAttendReason.nodes}/>
  



    </>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulAttendReason {
      nodes {
        subtitle
        title
        id
      }
    }
    allContentfulAboutUsGallery {
      nodes {
        galleryImage {
          id
          url
          description
        }
      }
    }
  }
`

export default About

export const Head = () => (
  <Seo title = "About" description="This is the about page"/>
)