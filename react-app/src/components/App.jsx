import React, { useState, useEffect } from 'react';
import './App.css';
import './AppFit.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoutes from './appRouter/AppRoutes';
import Form from './Form';
import NavBar from './Nav/NavBar';
import { MyProvider, LOCALES } from '../translation';
import translate from '../translation/do-translate';


function App() {

    const [locale, setLocale] = useState(LOCALES.UKRAINIAN);
    const [contactForm, setContactForm] = useState(false);
    const [navbar, setNavbarOpen] = useState(false);

    function checkLocation() {
        setInterval(() => {
            let loc = window.location.href;
            if (loc === 'http://localhost:3000/contacts') {
                setContactForm(false);
            }
        }, 1000)
    };

    const checkBrowserLang = () => {
        // ----------------------------------------------browser language----------------
        const userDefaultLanguage = navigator.language;
        // console.log(userDefaultLanguage);
        switch (userDefaultLanguage) {
            case "ru": {
                setLocale(LOCALES.RUSSIAN);
                break;
            }
            case "ru-RU": {
                setLocale(LOCALES.RUSSIAN);
                break;
            }
            case "uk": {
                setLocale(LOCALES.UKRAINIAN);
                break;
            }
            case "uk-UA": {
                setLocale(LOCALES.UKRAINIAN);
                break;
            }
            case "en": {
                setLocale(LOCALES.ENGLISH);
                break;
            }
            case "en-US": {
                setLocale(LOCALES.ENGLISH);
                break;
            }
            case "en-AU": {
                setLocale(LOCALES.ENGLISH);
                break;
            }
            case "en-GB": {
                setLocale(LOCALES.ENGLISH);
                break;
            }
            case "en-IE": {
                setLocale(LOCALES.ENGLISH);
                break;
            }
            case "en-ZA": {
                setLocale(LOCALES.ENGLISH);
                break;
            }
            default: return setLocale(LOCALES.UKRAINIAN);
        }
    }

    useEffect(() => {
        checkLocation();
        checkBrowserLang();
        if (window.innerWidth < 1000) {
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
        <MyProvider locale={locale}>
            <BrowserRouter>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {window.innerWidth > 1000 ? <NavBar></NavBar> :
                        <div id="phone-navBar">
                            <div className="topnav">
                                <a href="/" className="active"><img style={{ marginTop: '-10px', marginLeft: "-10px", height: '50px', width: '50px' }} src="https://i.pinimg.com/originals/fc/c7/86/fcc78657ad0c02e0aebc247943503341.png" alt="logo" /></a>
                                <a href="#" className="icon" onClick={() => { setNavbarOpen(!navbar) }}>
                                    {navbar ? <i className="fas fa-times  fa-2x" style={{ color: 'black' }}></i> : <i className="fa fa-bars fa-2x" style={{ color: 'black' }}></i>}
                                </a>
                            </div>
                            {
                                !navbar ? null :
                                    <div className="openNav" style={{ width: '100%', position: 'absolute', zIndex: '10', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ width: '100%', textAlign: 'center' }}>
                                            <a href="#ukr" style={{ color: 'wheat', paddingLeft: '10px', paddingRight: '10px' }} onClick={() => { setLocale(LOCALES.UKRAINIAN) }}> Укр. </a>
                                            <a href="#rus" style={{ color: 'wheat', paddingLeft: '10px', paddingRight: '10px' }} onClick={() => { setLocale(LOCALES.RUSSIAN) }}> Рус. </a>
                                            <a href="#eng" style={{ color: 'wheat', paddingLeft: '10px', paddingRight: '10px' }} onClick={() => { setLocale(LOCALES.ENGLISH) }}> Eng. </a>
                                        </div>
                                        <a href="/" className="nav-link" id="home-link" onClick={() => { setNavbarOpen(!navbar) }}>{translate('home-nuv')}</a>
                                        <a href="/about" className="nav-link" id="about-link" onClick={() => { setNavbarOpen(!navbar) }}>{translate('about-nuv')}</a>
                                        <a href="/creation" className="nav-link" id="creation-link" onClick={() => { setNavbarOpen(!navbar) }}>{translate('creation-nuv')}</a>
                                        <a href="/coating" className="nav-link" id="coating-link" onClick={() => { setNavbarOpen(!navbar) }}>{translate('painting-nuv')}</a>
                                        <a href="/portfolio" className="nav-link" id="portfolio-link" onClick={() => { setNavbarOpen(!navbar) }}>{translate('portfolio-nuv')}</a>
                                        <a href="/contacts" className="nav-link" id="contacts-link" onClick={() => { setNavbarOpen(!navbar) }}>{translate('contacts-nuv')}</a>
                                    </div>
                            }
                        </div>
                    }

                    <div className="Main-Component">
                        {/* ----------------------------------------------------- MAIN -------------------- */}
                        <Switch>
                            <AppRoutes />
                        </Switch>
                        {/* ------------------------------------------------- FOOTER------------------------  */}
                        <br></br>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <a className="footer-icon" href="https://www.google.com/maps?ll=49.758776,24.015178&z=15&t=m&hl=en&gl=IL&mapclient=embed&cid=7705576045394627295" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-map-marker-alt fa-2x"></i>
                            </a>
                            <a className="footer-icon" href="https://www.instagram.com/lys.furniture.ua/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a className="footer-icon" href="https://www.facebook.com/lys.furniture.ua" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f fa-2x"></i>
                            </a>
                            <a className="footer-icon" target="_blank" rel="noopener noreferrer" href="viber://chat?number=%2B380934864811" >
                                <i className="fab fa-viber fa-2x"></i>
                            </a>
                            <a className="footer-icon" target="_blank" rel="noopener noreferrer"
                                // href="https://telegram.me/+380(98)6007136"
                                href="https://t.me/CrDemon"
                            >
                                <i className="fab fa-telegram fa-2x"></i>
                            </a>
                            <a className="footer-icon" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=380986007136">
                                <i className="fab fa-whatsapp-square fa-2x"></i>
                            </a>
                        </div>

                        <div id="creators">This site was designed and created by <a href="https://www.linkedin.com/in/julia-orendovskyi-026a30b6/">Julia Oren</a> & <a href="https://www.linkedin.com/in/iyar-nitzan-576184110/">Iyar Nitzan</a></div>
                    </div>
                    {/* -------------------RIGHT NAVIGATION------------- LANGUEGES + MESEGER  ---------------------------- */}
                    {/* {window.innerWidth < 1700 ? null :
                        <div className="right-side-bottom">
                            <img src="https://i.pinimg.com/originals/aa/bd/f3/aabdf3d89c7449946d5ddea47f8a01af.png" alt="Blue paint" />
                            <div style={{ position: 'fixed', zIndex: '5', right: '50px', top: '400px' }}>
                                <ul>
                                    <li className="right-nav-button">
                                        <a href="#ukr" onClick={() => { setLocale(LOCALES.UKRAINIAN) }}> Укр. </a>
                                    </li>
                                    <li className="right-nav-button">
                                        <a href="#rus" onClick={() => { setLocale(LOCALES.RUSSIAN) }}> Рус. </a>
                                    </li>
                                    <li className="right-nav-button">
                                        <a href="#eng" onClick={() => { setLocale(LOCALES.ENGLISH) }}> Eng. </a>
                                    </li>
                                    <li className="right-nav-button">
                                        <a id='contuct-button-2' href="#message" onClick={() => { setContactForm(!contactForm) }}>
                                            {!contactForm ? <i className="far fa-comment-dots fa-2x"></i> : <i className="fas fa-times  fa-3x"></i>}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <img style={{ marginTop: '-100px' }} src="https://i.pinimg.com/originals/cd/22/1f/cd221f9df05fda9bd84693f7739c736a.png" alt="Green paint" />
                        </div>
                    } */}
                    {window.innerWidth > 1000 ?
                        <div className="right-side-bottom">
                            <a href="#ukr" onClick={() => { setLocale(LOCALES.UKRAINIAN) }}> Укр. </a>
                            <a href="#rus" onClick={() => { setLocale(LOCALES.RUSSIAN) }}> Рус. </a>
                            <a href="#eng" onClick={() => { setLocale(LOCALES.ENGLISH) }}> Eng. </a>
                            {window.innerWidth < 500 ? null :
                                <a id='contuct-button-2' href="#message" onClick={() => { setContactForm(!contactForm) }}>
                                    {!contactForm ? <i className="far fa-comment-dots fa-2x"></i> : <i className="fas fa-times  fa-3x"></i>}
                                </a>
                            }
                        </div>
                        : null}
                    {/*  --------------------------------------CONTACT FORM------------------------- */}
                    {(!contactForm) ? null :
                        <div className="contact-form"> <Form></Form> </div>}
                </div>
            </BrowserRouter >
        </MyProvider >
    );
}

export default App;