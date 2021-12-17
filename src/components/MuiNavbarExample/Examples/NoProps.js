import React from 'react';
import { MuiNavbar, NavItem } from 'mui-navbar'
const NoProps = () => {
    return (
        <MuiNavbar>
            <NavItem to="/no-props/home">Home</NavItem>
            <NavItem to="/no-props/about">About</NavItem>
            <NavItem to="/no-props/blog">Blog</NavItem>
            <NavItem to="/no-props/contact">Contact</NavItem>
        </MuiNavbar>
    );
};

export default NoProps;