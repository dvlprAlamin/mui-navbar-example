import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GradientBg from './components/MuiNavbarExample/Examples/GradientBg';
import MuiNavbarExample from './components/MuiNavbarExample/MuiNavbarExample';
import Home from './components/MuiNavbarExample/pages/Home';
import About from './components/MuiNavbarExample/pages/About';
import Blog from './components/MuiNavbarExample/pages/Blog';
import Contact from './components/MuiNavbarExample/pages/Contact';
import NoProps from './components/MuiNavbarExample/Examples/NoProps';
import WithLogo from './components/MuiNavbarExample/Examples/WithLogo';
import WithDifferentProps from './components/MuiNavbarExample/Examples/WithDifferentProps';
const pages = [
  {
    route: '/home',
    component: Home
  },
  {
    route: '/about',
    component: About
  },
  {
    route: '/blog',
    component: Blog
  },
  {
    route: '/contact',
    component: Contact
  },
]
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MuiNavbarExample} />
        <Route exact path='/home' component={MuiNavbarExample} />
        <Route exact path='/no-props' component={NoProps} />
        <Route exact path='/gradient-bg' component={GradientBg} />
        {
          pages.map((page) =>
            <Route path={`/no-props${page.route}`}>
              <page.component GradientBg={NoProps} />
            </Route>)
        }
        {
          pages.map((page) =>
            <Route path={`/with-logo${page.route}`}>
              <page.component GradientBg={WithLogo} />
            </Route>)
        }
        {
          pages.map((page) =>
            <Route path={`/different-props${page.route}`}>
              <page.component GradientBg={WithDifferentProps} />
            </Route>)
        }
        {
          pages.map((page) =>
            <Route path={`/gradient-bg${page.route}`}>
              <page.component GradientBg={GradientBg} />
            </Route>)
        }
        {/* <Route path='/:id/home'>
          <Home GradientBg={GradientBg} />
        </Route>
        <Route path='/:id/about'>
          <About GradientBg={GradientBg} />
        </Route>
        <Route path='/:id/blog'>
          <Blog GradientBg={GradientBg} />
        </Route> */}
        {/* <Route path='/:id/contact'>
          <Contact GradientBg={GradientBg} />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
