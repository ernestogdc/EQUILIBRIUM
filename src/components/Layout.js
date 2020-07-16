import React from 'react';
import Navbar from './Navbar';


const Layout = ({ title, children }) => {
    return (
        <>
            <Navbar title={title} />
            {children}

        </>
    );
}

export default Layout;