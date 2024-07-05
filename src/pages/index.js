import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Form from '../components/contact-us-components/Form'
import Header from '../components/base/Header'
import { Seo } from '../components/base/Seo'
import { graphql } from "gatsby"
import background from "../images/csshomepage.png"
import TitleBackground from '../components/base/TitleBackground'


const HomePage = ({data}) => {
  return (
    <div>
      <TitleBackground title = "CUSEC 2024"/>
      <NavigationBar pathname={'/'}/>
      <Header title="Home" background={background}/>
      <Form />

    </div>
  )
}

export default HomePage
// query to return all galleryImages from the AboutUsGallery

export const Head = () => (
  <Seo title = "Home Page"  description="This is the home page"/>
)