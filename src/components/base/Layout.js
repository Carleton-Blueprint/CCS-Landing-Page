import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import Footer from './Footer';

const Layout = ({ pathname, backgroundColour, children }) => {
  return (
    <div className="layout" style={{ backgroundColor: backgroundColour }}>
      <NavigationBar pathname={pathname} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
