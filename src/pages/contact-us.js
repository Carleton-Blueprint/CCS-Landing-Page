import React from 'react';
import Form from '../components/contact-us-components/Form';
import Header from '../components/base/Header';
import SocialMedia from '../components/contact-us-components/SocialMedia';
import background from '../images/contact-us-header.svg';
import Layout from '../components/base/Layout';
import AppearFrom from '../components/animation-wrappers/AppearFrom';

const ContactPage = ({ location }) => {
  return (
    <Layout pathname={location.pathname}>
      <Header title="Contact Us" background={background} />
      <AppearFrom direction="left" speed="2">
        <Form />
      </AppearFrom>
      <SocialMedia />
    </Layout>
  );
};

export default ContactPage;
