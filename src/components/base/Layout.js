import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const Layout = ({ pathname, children }) => {

    return (
        <div className="layout">
            <NavigationBar pathname={pathname}/>
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;