import React, { useState, useEffect } from 'react';
import './NavBar.css';
import './SmallNavBar.css';
import { Link } from "react-router-dom";
import { routes } from '../appRouter/routers.config';
import translate from '../../translation/do-translate';


function NavBar() {

    const [navbar, setNavbarOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1250) {
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("phone-navBar").style.top = "0";
                } else {
                    document.getElementById("phone-navBar").style.top = "-70px";
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }, []);


    return (
        <div>
            {
                window.innerWidth < 1250 ?
                    <div id="phone-navBar">
                        <div className="topnav">
                            <a href="/" className="active"><img style={{ marginTop: '-10px', marginLeft: "-10px", height: '50px', width: '50px' }} src="https://i.pinimg.com/originals/fc/c7/86/fcc78657ad0c02e0aebc247943503341.png" alt="logo" /></a>
                            <a href="#" className="icon" onClick={() => { setNavbarOpen(!navbar) }}>
                                {navbar ? <i className="fas fa-times  fa-2x" style={{ color: 'black' }}></i> : <i className="fa fa-bars fa-2x" style={{ color: 'black' }}></i>}
                            </a>
                        </div>
                        {
                            !navbar ? null :
                                <div className="openNav">
                                    {routes.filter(route => route).map(route =>
                                        <Link className={route.className} key={route.key} to={route.path} onClick={() => { setNavbarOpen(!navbar) }}>
                                            {route.title}
                                        </Link>
                                    )}
                                </div>
                        }
                    </div>
                    :
                    <div id="NavBar">
                        <div className="logo-div"></div>
                        <div className="logo"></div>

                        <div id="navbar">
                            {routes.filter(route => route).map(route =>
                                <Link className={route.className} key={route.key} to={route.path}>
                                    {route.title}
                                </Link>
                            )}
                        </div>

                        <div className="wood">
                            {translate('loz')}
                        </div>
                    </div>
            }
        </div >
    )
}

export default NavBar;