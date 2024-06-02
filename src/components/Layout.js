
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '15px' }}>Home</Link>
            <Link to="/form" style={{ color: 'inherit', textDecoration: 'none', marginRight: '15px' }}>User Form</Link>
            <Link to="/editor" style={{ color: 'inherit', textDecoration: 'none', marginRight: '15px' }}>Rich Text Editor</Link>
            <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>Dashboard</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </>
  );
};

export default Layout;