import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Form from '../components/contact-us/Form'
import { Seo } from '../components/base/Seo'
import AboutUsGallery from '../components/about-us-components/gallery-components/AboutUsGallery'
import { graphql } from "gatsby"


const HomePage = ({data}) => {
  const galleryImages = data.allContentfulAboutUsGallery.nodes 
  return (
    <div>
      <NavigationBar pathname={'/'}/>
      <Form />
      <div className='flex justify-center'>
        <AboutUsGallery images = {galleryImages}/>
      </div>
    </div>
  )
}

export default HomePage
// query to return all galleryImages from the AboutUsGallery
export const query = graphql`
  query {
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
`;
export const Head = () => (
  <Seo title = "Home Page"  description="This is the home page"/>
)