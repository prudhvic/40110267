import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static" px={3}>
            <Toolbar>
                <Typography variant="h6" component="h1" flexGrow={1}>
                    FullStackTrain
                </Typography>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
