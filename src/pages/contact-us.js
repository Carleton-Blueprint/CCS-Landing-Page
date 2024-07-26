import React from 'react';
import Form from '../components/contact-us-components/Form';
import Header from '../components/base/Header';
import SocialMedia from '../components/contact-us-components/SocialMedia';
import background from '../images/contact-us-header.svg';
import NavigationBar from '../components/base/NavigationBar';
import ToastProvider from '../components/base/ToastProvider';

const ContactPage = () => {
  return (
    <ToastProvider>
      <NavigationBar pathname={'/contact-us'} />
      <Header title="Contact Us" background={background} />
      <Form />
      <SocialMedia />
    </ToastProvider>
  );
};

export default ContactPage;
