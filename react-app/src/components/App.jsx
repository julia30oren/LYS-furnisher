import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoutes from './appRouter/AppRoutes';
import AppLinks from './appRouter/AppLinks';
import Form from './Form';
import { MyProvider, LOCALES } from '../translation';


function App() {

    function checkLocation() {
        setInterval(() => {
            let loc = window.location.href;
            if (loc === 'http://localhost:3000/contacts') {
                setContactForm(false);
            }
        }, 1000)
    };

    const checkBrowserLang = () => {
        const defLang = localStorage.getItem("Lys-Lang")
        if (defLang === "ru-RU") {
            setLocale(LOCALES.RUSSIAN)
        }
        if (defLang === "uk-UA") {
            setLocale(LOCALES.UKRAINIAN)
        }
        if (defLang === "en-US" || "en-AU" || "en-GB" || "en-IE" || "en-ZA") {
            localStorage.setItem("Lys-Lang", "en-US")
            setLocale(LOCALES.ENGLISH)
        } else {
            localStorage.setItem("Lys-Lang", "uk-UA")
            setLocale(LOCALES.ENGLISH)
        }
        const userDefaultLanguage = navigator.language
        // console.log(userDefaultLanguage)
        if (!defLang) {
            if (userDefaultLanguage === "ru-RU") {
                localStorage.setItem("Lys-Lang", "ru-RU")
                setLocale(LOCALES.RUSSIAN)
            }
            if (userDefaultLanguage === "uk-UA") {
                localStorage.setItem("Lys-Lang", "uk-UA")
                setLocale(LOCALES.UKRAINIAN)
            }
            if (userDefaultLanguage === "en-US" || "en-AU" || "en-GB" || "en-IE" || "en-ZA") {
                localStorage.setItem("Lys-Lang", "en-US")
                setLocale(LOCALES.ENGLISH)
            } else {
                localStorage.setItem("Lys-Lang", "uk-UA")
                setLocale(LOCALES.ENGLISH)
            }
        }
    };

    useEffect(() => {
        checkLocation();
        // checkBrowserLang();
    }, []);


    const [locale, setLocale] = useState(LOCALES.UKRAINIAN);
    const [contactForm, setContactForm] = useState(false);
    const [navbar, setNavbarOpen] = useState(false);


    return (

        <MyProvider locale={locale}>
            <BrowserRouter>
                <div className="App" style={{ display: 'flex' }}>

                    <div className="Navigation-left-side">

                        <div className="Nuv-div">
                            <ul className="Nuv-lu">
                                <li className="Nav-item">
                                    <div className="Nav-lang">
                                        <button onClick={() => { setLocale(LOCALES.UKRAINIAN) }} className="lang-button">
                                            <p className="lang-title">Укр.</p></button>
                                        <button onClick={() => { setLocale(LOCALES.RUSSIAN) }} className="lang-button">
                                            <p className="lang-title">Рус.</p></button>
                                        <button onClick={() => { setLocale(LOCALES.ENGLISH) }} className="lang-button">
                                            <p className="lang-title">Eng.</p></button>
                                    </div>
                                </li>
                                <AppLinks />
                            </ul>
                        </div>

                        {/* <div className="Nuv-logo">
                            <img className="logo" src="https://i.pinimg.com/originals/ea/5b/db/ea5bdb33212032fbc202d3bdc6869a33.png" alt="family-logo" />

                            <div className='icon-link-div'>
                                <a className="footer-icon" href="https://www.google.com/maps?ll=49.758776,24.015178&z=15&t=m&hl=en&gl=IL&mapclient=embed&cid=7705576045394627295" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-map-marker-alt fa-3x"></i>
                                </a>
                                <a className="footer-icon" href="https://www.instagram.com/lys.furniture.ua" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram fa-3x"></i>
                                </a>
                                <a className="footer-icon" href="https://www.facebook.com/lys.furniture.ua" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f fa-3x"></i>
                                </a>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="Navigation-top">
                        <div className="Nav-burger">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <button className="burger-button" type="button" onClick={() => setNavbarOpen(!navbar)}>
                                    {navbar ? <i className="fas fa-times  fa-2x"></i> : <i className="fas fa-bars fa-3x"></i>}
                                </button>
                                <img className="top-logo" src="https://i.pinimg.com/originals/30/11/d0/3011d0882f8e3efdb6402b6e381c1753.png" alt="family-logo" />
                                <div className='Icos-top-div'>
                                    <a className="footer-icon" href="https://www.google.com/maps?ll=49.758776,24.015178&z=15&t=m&hl=en&gl=IL&mapclient=embed&cid=7705576045394627295" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-map-marker-alt fa-2x"></i>
                                    </a>
                                    <a className="footer-icon" href="https://www.instagram.com/lys.furniture.ua/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                    <a className="footer-icon" href="https://www.facebook.com/lys.furniture.ua" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f fa-2x"></i>
                                    </a>
                                </div>
                            </div>

                            {!navbar ? null :
                                <div className="Nav-Top">
                                    <ul className="Nuv-lu" onClick={() => setNavbarOpen(!navbar)}>

                                        <li className="Nav-item">
                                            <div className="Nav-lang">
                                                <button onClick={() => { setLocale(LOCALES.UKRAINIAN) }} className="lang-button">
                                                    <p className="lang-title">Укр.</p></button>
                                                <button onClick={() => { setLocale(LOCALES.RUSSIAN) }} className="lang-button">
                                                    <p className="lang-title">Рус.</p></button>
                                                <button onClick={() => { setLocale(LOCALES.ENGLISH) }} className="lang-button">
                                                    <p className="lang-title">Eng.</p></button>
                                            </div>
                                        </li>
                                        <AppLinks />
                                    </ul>
                                </div>
                            }
                        </div>
                    </div> */}

                    <div className="Main-Component">
                        <Switch>
                            <AppRoutes />
                        </Switch>

                        <div style={{ width: '100%', textAlign: 'center' }}>This site was designed and created by <a href="https://www.linkedin.com/in/julia-orendovskyi-026a30b6/">Julia Oren</a> & <a href="https://www.linkedin.com/in/iyar-nitzan-576184110/">Iyar Nitzan</a></div>
                    </div>

                    <div className="right-side-bottom">
                        <button id='contuct-button' onClick={() => { setContactForm(!contactForm) }}>
                            {!contactForm ? <i className="far fa-comment-dots fa-2x"></i> : <i className="fas fa-times  fa-3x"></i>}
                        </button>
                    </div>
                    {(!contactForm) ? null :
                        <div className="contact-form"> <Form></Form> </div>}
                </div>

            </BrowserRouter >
        </MyProvider>
    );
}

export default App;