import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import AppLinks from './appRouter/AppLinks';
import logo from '../pic/fox-logo2.png'

export default function NavBar(props) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: 'green', justifyContent: 'right' }}>
            <div className='main-logo'>
                <img src={logo} alt="Logo" style={{ width: '90%' }} />
            </div>

            <div style={{ width: '100%', position: 'absolute', bottom: '0' }}>
                <ul>
                    <AppLinks />
                    <li className="nav-item">
                        <a href="" className="nax-text">Укр.</a> / <a href="" className="nax-text">Рус.</a> / <a href="" className="nax-text">Eng.</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}