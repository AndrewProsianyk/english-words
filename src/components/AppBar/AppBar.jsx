import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.scss'

export default function AppBar() {
    return (
        <div className="container">
            <div className="navigation">
                <NavLink to="/" className="nav-link" activeclassname="active">Add</NavLink>
                <NavLink to="/checking" className="nav-link" activeclassname="active">Checking</NavLink>
                <NavLink to="/base" className="nav-link" activeclassname="active">Base</NavLink>
            </div>
        </div>
    )
}