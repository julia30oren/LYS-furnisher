import React, { useEffect } from 'react';
import './NavBar.css';
import './SmallNavBar.css';
import AppLinks from '../appRouter/AppLinks';
import translate from '../../translation/do-translate';

function NavBar() {

    useEffect(() => {
        console.log('ljuhf');
        // --------------------------
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {

            var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                if (window.innerWidth < 1700) {
                    var currentScrollPos = window.pageYOffset;
                    if (prevScrollpos > currentScrollPos) {
                        document.getElementById("smallNavBar").style.top = "0";
                    } else {
                        document.getElementById("smallNavBar").style.top = "-150px";
                    }
                    prevScrollpos = currentScrollPos;
                }
            }
        }
        // ---------------------------------
    }, []);


    return (
        <div>
            {
                window.innerWidth < 1700 ?
                    <div id="smallNavBar">
                        <div id="sm-nav-left">
                            <a href="/"><img style={{ height: '100px', width: '100px' }} src="https://i.pinimg.com/originals/fc/c7/86/fcc78657ad0c02e0aebc247943503341.png" alt="logo" /></a>
                        </div>
                        <div id="sm-nav-mid">
                            <a href="/" className="nav-link" id="home-link">{translate('home-nuv')}</a>
                            <a href="/about" className="nav-link" id="about-link">{translate('about-nuv')}</a>
                            <a href="/creation" className="nav-link" id="creation-link">{translate('creation-nuv')}</a>
                            <a href="/coating" className="nav-link" id="coating-link">{translate('painting-nuv')}</a>
                            <a href="/portfolio" className="nav-link" id="portfolio-link">{translate('portfolio-nuv')}</a>
                            <a href="/contacts" className="nav-link" id="contacts-link">{translate('contacts-nuv')}</a>
                        </div>
                        <div id="sm-nav-right">
                        </div>
                    </div>
                    :
                    <div id="NavBar">
                        <div className="logo-div"></div>
                        <div className="logo"></div>

                        <div id="navbar">
                            <AppLinks />
                        </div>

                        <div className="wood"></div>
                    </div>
            }
        </div >
    )
}

export default NavBar;