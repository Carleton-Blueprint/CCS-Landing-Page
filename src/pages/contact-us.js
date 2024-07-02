import React from "react"
import Form from "../components/contact-us-components/Form"
import Header from "../components/base/Header"
import SocialMedia from "../components/contact-us-components/SocialMedia"
import Background from "../images/Contact_us_background.svg"
const ContactPage = () => {
    return(
        <>
            <Header title='Contact Us' background={Background}/>
            <Form/>
            <SocialMedia/>
        </>
    )
}

export default ContactPage