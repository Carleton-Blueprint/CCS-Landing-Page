import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Form from '../components/contact-us/Form'
import { Seo } from '../components/base/Seo'
import importAll from '../components/about-us-components/gallery-components/GalleryLoader'
import Test from '../components/about-us-components/Test'
const HomePage = () => {

  const importedImages = importAll(require.context('../images/about-gallery-images', false, /\.(png|jpe?g|svg)$/));
  return (
    <div>
      <NavigationBar pathname={'/'}/>
      <Form />
      <div className='flex justify-center'>
        <Test images = {importedImages}/>
      </div>
    </div>
  )
}

export default HomePage

export const Head = () => (
  <Seo title = "Home Page"  description="This is the home page"/>
)