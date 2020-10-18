import React from 'react';
import './NavBar.css';
import AppLinks from '../appRouter/AppLinks';


function NavBar() {

    return (
        <div id="NavBar">

            <div className="logo-div">
                <div className="logo"></div>
            </div>

            <div id="navbar">
                <AppLinks />
            </div>

            <div className="wood"></div>

        </div>
    )
}

export default NavBar;