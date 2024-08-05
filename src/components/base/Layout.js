import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
const Layout = ({ pathname, backgroundColour, children }) => {
  return (
    <div className="layout" style={{ backgroundColor: backgroundColour }}>
      <ToastContainer />
      <NavigationBar pathname={pathname} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
