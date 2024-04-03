import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import { Seo } from '../components/base/Seo'
const About = () => {
  return (
    <div><NavigationBar pathname={'/about'}/></div>
  )
}

export default About

export const Head = () => (
  <Seo title = "About" description="This is the about page"/>
)