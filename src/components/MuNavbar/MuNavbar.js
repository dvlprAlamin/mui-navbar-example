import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Container, useTheme } from '@mui/material';


const MuiNavbar = ({
    height,
    background,
    navItemPosition,
    logoTextColor,
    logo,
    logoText,
    togglerColor,
    children }) => {
    const drawerWidth = 200;
    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            background: background || theme.palette.primary.main
        },
        navLogoText: {
            color: theme.palette.primary.main,
            textAlign: 'center',
            margin: '1rem .3rem'
        },
        logoImg: {
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        navbar: {
            [theme.breakpoints.down('md')]: {
                display: 'none !important'
            },
            display: 'flex',
            alignItems: 'center',
            minHeight: height || 64
        },
        appBar: {
            background: `${background || theme.palette.primary.main} !important`,
            [theme.breakpoints.up('md')]: {
                width: '100%',
                display: 'none !important',
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        drawerPaper: {
            width: drawerWidth,
            background: `${background || theme.palette.primary.main} !important`
        },
        mobileMenu: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        appBarHeight: {
            height: height || 64,
            background: 'transparent',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                height: 48
            },
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        }
    });
    const { root, appBar, menuButton, drawerPaper, navbar, mobileMenu, appBarHeight } = useStyles()
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ textAlign: 'center' }}>
            {logo ?
                <img src={logo} style={{ maxWidth: '90%', maxHeight: 80, margin: '20px auto' }} alt="Logo" /> :
                <Typography style={{ margin: '20px auto', color: logoTextColor || '#fff' }} variant="h6">
                    {logoText || ''}
                </Typography>
            }
            {(logo || logoText) && <Divider />}
            <div className={mobileMenu}>
                {children}
            </div>
        </div>
    );
    return (
        <div className={root}>
            <AppBar className={appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={menuButton}
                    >
                        <div>
                            {[...Array(3)].map((e, i) =>
                                <div
                                    key={i}
                                    style={{
                                        width: 25,
                                        height: 3,
                                        backgroundColor: togglerColor || '#fff',
                                        margin: '4px 0'
                                    }}></div>)}
                        </div>
                    </IconButton>
                </Toolbar>

            </AppBar>
            <div className={appBarHeight}></div>
            <nav>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            <Container>
                <div className={navbar}>
                    <div style={{ flex: 1 }}>
                        {logo ?
                            <img src={logo} style={{ maxWidth: 250, maxHeight: 55 }} alt="Logo" /> :
                            <Typography variant="h6" style={{ color: logoTextColor || '#fff' }}>
                                {logoText || ''}
                            </Typography>
                        }
                    </div>
                    <div style={{ flex: 3, textAlign: navItemPosition || 'right' }}>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
}


export default MuiNavbar;