import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

export default function NavBar(props) {

    return (
        <ul className="nav">
            <li className="nav-item">
                <a style={{ color: 'rgb(255, 166, 0)' }}>Language</a>
            </li>
            <li className="nav-item">
                <NavLink to='/' activeStyle={{ color: 'black' }} style={{ color: 'rgb(255, 166, 0)' }}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/about' activeStyle={{ color: 'black' }} style={{ color: 'rgb(255, 166, 0)' }}>About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/portfolio' activeStyle={{ color: 'black' }} style={{ color: 'rgb(255, 166, 0)' }}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/creation' activeStyle={{ color: 'black' }} style={{ color: 'rgb(255, 166, 0)' }}>Creation</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/painting' activeStyle={{ color: 'black' }} style={{ color: 'rgb(255, 166, 0)' }}>Painting</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/contacts' activeStyle={{ color: 'black' }} style={{ color: 'white' }}>Contacts</NavLink>
            </li>
        </ul>
    );
}