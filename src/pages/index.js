import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Form from '../components/contact-us-components/Form'
import Header from '../components/base/Header'
import { Seo } from '../components/base/Seo'
import { graphql } from "gatsby"
import HomeImageCarousel from '../components/home-components/home-gallery-components/HomeImageCarousel'
import Layout from '../components/base/Layout'

const HomePage = ({ data, location }) => {
  return (
    <Layout pathname={location.pathname}>
      <div className='h-screen bg-red-200'>
        <NavigationBar pathname={'/'}/>
        <Form />
        <HomeImageCarousel images={data.allContentfulAboutUsGallery.nodes} size = 'sm'/>
      </div>
    </Layout>
    
  )
}

export const query = graphql`
query{
  allContentfulAboutUsGallery {
    nodes {
      galleryImage {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 600
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
}
`;
export default HomePage
// query to return all galleryImages from the AboutUsGallery

export const Head = () => (
  <Seo title = "Home Page"  description="This is the home page"/>
)

