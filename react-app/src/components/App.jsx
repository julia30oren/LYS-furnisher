import React, { useState, useEffect } from 'react';
import './App.css';
import './AppFit.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoutes from './appRouter/AppRoutes';
import Form from './Form';
// import NavBar from './Nav/NavBar';
import { MyProvider, LOCALES } from '../translation';
import { Link } from "react-router-dom";
import { routes } from './appRouter/routers.config';
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
        <MyProvider locale={locale}>
            <BrowserRouter>
                {/* <NavBar></NavBar> */}
                {
                    window.innerWidth < 1250 ?
                        <div id="phone-navBar">
                            <div className="topnav">
                                <a href="/" className="active"><img style={{ marginTop: '-10px', marginLeft: "-10px", height: '50px', width: '50px' }} src="https://i.pinimg.com/originals/fc/c7/86/fcc78657ad0c02e0aebc247943503341.png" alt="logo" /></a>
                                <a href="#ukr" style={{ position: 'absolute', top: '10px', right: '100px', color: 'black' }} onClick={() => { setLocale(LOCALES.UKRAINIAN) }}> Укр. </a>
                                <a href="#rus" style={{ position: 'absolute', top: '10px', right: '170px', color: 'black' }} onClick={() => { setLocale(LOCALES.RUSSIAN) }}> Рус. </a>
                                <a href="#eng" style={{ position: 'absolute', top: '10px', right: '240px', color: 'black' }} onClick={() => { setLocale(LOCALES.ENGLISH) }}> Eng. </a>
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
                                <p>{translate('loz')}</p>
                            </div>
                        </div>
                }

                <div className="Main-Component">
                    {/* ----------------------------------------------------- MAIN -------------------- */}
                    <Switch>
                        <AppRoutes />
                    </Switch>
                </div>

                {window.innerWidth > 1250 ?
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
                    : null
                    // <div id="ph-Bar" style={{ position: 'fixed', zIndex: '11', right: '80px', top: '20px' }} onScroll={() => { console.log(111) }}>
                    //     <a href="#ukr" className="lang-link" onClick={() => { setLocale(LOCALES.UKRAINIAN) }}> Укр. </a>
                    //     <a href="#rus" className="lang-link" onClick={() => { setLocale(LOCALES.RUSSIAN) }}> Рус. </a>
                    //     <a href="#eng" className="lang-link" onClick={() => { setLocale(LOCALES.ENGLISH) }}> Eng. </a>
                    // </div>
                }
                {/*  --------------------------------------CONTACT FORM------------------------- */}
                {(!contactForm) ? null :
                    <div className="contact-form"> <Form></Form> </div>}
            </BrowserRouter >
        </MyProvider >
    );
}

export default App;