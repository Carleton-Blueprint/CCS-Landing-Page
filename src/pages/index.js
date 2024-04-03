import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Form from '../components/contact-us/Form'
import { Seo } from '../components/base/Seo'
const HomePage = () => {
  return (
    <div>
      <NavigationBar pathname={'/'}/>
      <Form />
    </div>
  )
}

export default HomePage

export const Head = () => (
  <Seo title = "Home Page"  description="This is the home page"/>
)