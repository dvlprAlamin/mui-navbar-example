export const basicExample = `
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navigation from './component/Navigation';

const App = () => {
  return (
      <Router>
        <Navigation/> // here place your Navbar component
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
  );
};

export default App;
`.trim();

export const noPropsCode = `
import React from 'react';
import { MuiNavbar, NavItem } from 'mui-navbar';

const Navigation = () => {
  return (
    <MuiNavbar>
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/Blog">Blog</NavItem>
        <NavItem to="/contact">Contact</NavItem>
    </MuiNavbar>
  );
};

export default Navigation;
`.trim();

export const withLogoCode = `
import React from 'react';
import { MuiNavbar, NavItem } from 'mui-navbar';
import logo from '../img/logo.jpg';

const Navigation = () => {
    return (
        <MuiNavbar
            logo={logo}
        >
            <NavItem to="/home">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/Blog">Blog</NavItem>
            <NavItem to="/contact">Contact</NavItem>
        </MuiNavbar>
    );
};

export default Navigation;
`.trim();
export const withDifferentPropsCode = `
import React from 'react';
import { MuiNavbar, NavItem } from 'mui-navbar';

const Navigation = () => {
    return (
        <MuiNavbar
            logoText="Mui Navbar"
            background="#07cdff"
            navItemPosition="left"
        >
            <NavItem to="/home">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/Blog">Blog</NavItem>
            <NavItem to="/contact">Contact</NavItem>
        </MuiNavbar>
    );
};

export default Navigation;
`.trim();
export const gradientBgCode = `
import React from 'react';
import { MuiNavbar, NavItem } from 'mui-navbar';

const Navigation = () => {
    return (
        <MuiNavbar
            logoText="Mui Navbar"
            background="linear-gradient(180deg, #19D3AE,#0FCFEC)"
        >
            <NavItem to="/home">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/Blog">Blog</NavItem>
            <NavItem to="/contact">Contact</NavItem>
        </MuiNavbar>
    );
};

export default Navigation;
`.trim();