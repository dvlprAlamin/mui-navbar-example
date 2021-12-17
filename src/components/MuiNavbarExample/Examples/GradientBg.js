import React from 'react';
import MuiNavbar from '../../MuNavbar/MuNavbar';
import NavItem from '../../MuNavbar/NavItem';

const GradientBg = () => {
    return (
        <MuiNavbar
            logoText="Mui Navbar"
            background="linear-gradient(180deg, #19D3AE,#0FCFEC)"
        >
            <NavItem to="/gradient-bg/home">Home</NavItem>
            <NavItem to="/gradient-bg/about">About</NavItem>
            <NavItem to="/gradient-bg/blog">Blog</NavItem>
            <NavItem to="/gradient-bg/contact">Contact</NavItem>
        </MuiNavbar>
    );
};

export default GradientBg;