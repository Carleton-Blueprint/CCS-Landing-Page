import React from 'react'
import NavigationBar from '../components/base/NavigationBar'
import Form from "../components/contact-us/Form"

const HomePage = () => {
  return (
    <div><NavigationBar pathname={'/'}/>
      <Form />
    </div>
  )
}

export default HomePage