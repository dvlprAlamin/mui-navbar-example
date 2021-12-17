import { Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CodeEditor from '../CodeEditor/CodeEditor';
import Basic from '../CodeEditor/Basic';
import { basicExample, gradientBgCode, noPropsCode, withDifferentPropsCode, withLogoCode } from './Code';
import Sidebar from './Sidebar';

const MuiNavbarExample = () => {
    const style = { textDecoration: 'none', color: '#fff' }
    return (
        <div style={{ marginLeft: 220 }}>
            <Sidebar />
            <Container>
                <div id="basic" style={{ paddingTop: 20 }}>
                    <Typography variant="h4" color="primary">Example code for implement Navigation component:</Typography>
                    <CodeEditor code={basicExample} />
                    <Divider sx={{ marginTop: 5 }} />
                </div>
                <div id="no-props" style={{ paddingTop: 20 }}>
                    <Typography variant="h4" color="primary">No props example code:</Typography>
                    <CodeEditor code={noPropsCode} />
                    <Button variant="contained">
                        <Link style={style} to='/no-props/home'>Live Example</Link>
                    </Button>
                    <Divider sx={{ marginTop: 10 }} />
                </div>
                <div id="with-logo" style={{ paddingTop: 20 }}>
                    <Typography variant="h4" color="primary">With logo example code:</Typography>
                    <CodeEditor code={withLogoCode} />
                    <Button variant="contained">
                        <Link style={style} to='/with-logo/home'>Live Example</Link>
                    </Button>
                    <Divider sx={{ marginTop: 10 }} />
                </div>
                <div id="different-props" style={{ paddingTop: 20 }}>
                    <Typography variant="h4" color="primary">Different props example code:</Typography>
                    <CodeEditor code={withDifferentPropsCode} />
                    <Button variant="contained">
                        <Link style={style} to='/different-props/home'>Live Example</Link>
                    </Button>
                    <Divider sx={{ marginTop: 10 }} />
                </div>
                <div id="gradient-bg" style={{ paddingTop: 20 }}>
                    <Typography variant="h4" color="primary">Gradient bg example code:</Typography>
                    <CodeEditor code={gradientBgCode} />
                    <Button variant="contained">
                        <Link style={style} to='/gradient-bg/home'>Live Example</Link>
                    </Button>
                    <Divider sx={{ marginTop: 10 }} />
                </div>
            </Container>
        </div>
    );
};

export default MuiNavbarExample;