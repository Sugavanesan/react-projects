import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
            <NavLink to="/" style={{ margin: '0 10px' }}>Home</NavLink>
            <NavLink to="/about" style={{ margin: '0 10px' }}>About</NavLink>
            <NavLink to="/contact" style={{ margin: '0 10px' }}>Contact</NavLink>
        </nav>
    );
}

export default AppNavbar;
