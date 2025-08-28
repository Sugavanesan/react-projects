import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNavName } from '../constants/RouteNavName';

const AppNavbar = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
            <NavLink to={RouteNavName.home} style={{ margin: '0 10px' }}>Home</NavLink>
            <NavLink to={RouteNavName.matches} style={{ margin: '0 10px' }}>Matches</NavLink>
            <NavLink to={RouteNavName.about} style={{ margin: '0 10px' }}>About</NavLink>
            <NavLink to={RouteNavName.contact} style={{ margin: '0 10px' }}>Contact</NavLink>
        </nav>
    );
}

export default AppNavbar;
