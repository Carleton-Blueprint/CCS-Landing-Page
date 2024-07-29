import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const Layout = ({ pathname, backgroundColour, children }) => {
  console.log(backgroundColour);
  return (
    <div className="layout" style={{ backgroundColor: backgroundColour }}>
      <NavigationBar pathname={pathname} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
