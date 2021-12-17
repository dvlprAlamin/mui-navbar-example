import React from 'react';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
const sidebarItems = [
    {
        label: 'Basic',
        route: '#basic',
    },
    {
        label: 'No props',
        route: '#no-props',
    },
    {
        label: 'With logo',
        route: '#with-logo',
    },
    {
        label: 'Different props',
        route: '#different-props',
    },
    {
        label: 'Gradient bg',
        route: '#gradient-bg',
    },
]
const drawerWidth = 220;
const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
    sidebarItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '.8rem 0',
        paddingLeft: '10%',
        opacity: '.9',
        transition: '.3s linear',
        '&:hover': {
            opacity: 1,
        },

    },
    active: {
        opacity: 1
    },
    sidebarIcon: {
        color: '#fff',
        marginRight: 10,
    },
    logoText: {
        color: '#fff',
        textDecoration: 'none',
        textAlign: 'center',
        margin: '2rem .3rem'
    },
    drawer: {
        width: drawerWidth,
        '@media(max-width:600px)': {
            display: 'none',

        },
    },
    appBar: {
        '@media(min-width:599px)': {
            display: 'none !important',

        },
        width: '100%',
        background: "linear-gradient(90deg, #3499ff,#3499ff)",
        boxShadow: 'none'
    },
    drawerPaper: {
        width: drawerWidth,
        background: 'linear-gradient(145deg, #3499ff,#3499ff,#3a3985)',

    },
    logOutBtnContainer: {
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    logOutBtn: {
        border: '2px solid #fff !important',
        color: '#fff !important',
        margin: '20px 0 !important'

    }
});

const Sidebar = () => {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div>
                <Link to='/' className={classes.logoText}>
                    <Typography variant="h5">Mui Navbar</Typography>
                </Link>
                <Divider />
                {
                    sidebarItems.map(({ label, route }) =>
                        <HashLink smooth key={label} to={route} className={classes.link}>
                            <ListItem button className={classes.sidebarItem} >
                                <ListItemText primary={label} />
                            </ListItem>
                        </HashLink>)
                }
            </div>
        </div>
    );
    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <div>
                            {[...Array(3)].map((e, i) =>
                                <div
                                    key={i}
                                    style={{
                                        width: 25,
                                        height: 3,
                                        backgroundColor: '#fff',
                                        margin: '4px 0'
                                    }}></div>)}
                        </div>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}


export default Sidebar;