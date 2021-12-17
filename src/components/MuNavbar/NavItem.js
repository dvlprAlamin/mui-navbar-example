import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const NavItem = ({ children, to, color, fontWeight, mx, my, px, py }) => {
    const useStyle = makeStyles({
        root: {
            padding: `${py || 10}px ${px || 15}px`,
            margin: `${my || 0}px ${mx || 5}px`,
            textDecoration: 'none',
            color: color || '#fff',
            fontWeight: fontWeight || 500,
            transition: '.3s',
        }
    })
    const { root } = useStyle()
    return (
        <Link to={to || '/'} className={root}>
            {children}
        </Link>
    );
};

export default NavItem;