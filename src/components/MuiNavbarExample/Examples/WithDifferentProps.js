import React from 'react';
import MuiNavbar from '../../MuNavbar/MuNavbar';
import NavItem from '../../MuNavbar/NavItem';
const WithDifferentProps = () => {
    return (
        <MuiNavbar
            logoText="Mui Navbar"
            background="#07cdff"
            navItemPosition="left"

        >
            <NavItem to="/different-props/home">Home</NavItem>
            <NavItem to="/different-props/about">About</NavItem>
            <NavItem to="/different-props/blog">Blog</NavItem>
            <NavItem to="/different-props/contact">Contact</NavItem>
        </MuiNavbar>
    );
};

export default WithDifferentProps;