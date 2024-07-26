import React from 'react';
import Form from '../components/contact-us-components/Form';
import Header from '../components/base/Header';
import SocialMedia from '../components/contact-us-components/SocialMedia';
import background from '../images/contact-us-header.svg';
import Layout from '../components/base/Layout';

import ToastProvider from '../components/base/ToastProvider';

const ContactPage = ({ location }) => {
  return (
    <ToastProviderLayout pathname={location.pathname}>
      <Header title="Contact Us" background={background} />
      <Form />
      <SocialMedia />
    </LayoutToastProvider>
  );
};

export default ContactPage;
