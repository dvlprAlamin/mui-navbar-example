import React from 'react';
import MuiNavbar from '../../MuNavbar/MuNavbar';
import NavItem from '../../MuNavbar/NavItem';
import logo from '../img/logo.png'
const WithLogo = () => {
    return (
        <MuiNavbar
            logo={logo}
        >
            <NavItem to="/with-logo/home">Home</NavItem>
            <NavItem to="/with-logo/about">About</NavItem>
            <NavItem to="/with-logo/blog">Blog</NavItem>
            <NavItem to="/with-logo/contact">Contact</NavItem>
        </MuiNavbar>
    );
};

export default WithLogo;