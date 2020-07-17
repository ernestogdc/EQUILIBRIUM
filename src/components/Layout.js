import React from 'react';
import Navbar from './Navbar';


const Layout = ({ title, children }) => {
    return (
        <>
            <Navbar title={title} />
            <div className='d-flex justify-content-center'>{children}</div>

        </>
    );
}

export default Layout;