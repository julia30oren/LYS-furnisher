import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoutes from './appRouter/AppRoutes';
import Form from './Form';
import NavBar from './Nav/NavBar';
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
    }, []);


    const [locale, setLocale] = useState(LOCALES.UKRAINIAN);
    const [contactForm, setContactForm] = useState(false);
    // const [navbar, setNavbarOpen] = useState(false);

    return (
        <MyProvider locale={locale}>
            <BrowserRouter>
                <NavBar></NavBar>

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
                        <a className="footer-icon" target="_blank" rel="noopener noreferrer" href="viber://chat?number=+380934864811">
                            <i className="fab fa-viber fa-2x"></i>
                        </a>
                        <a className="footer-icon" target="_blank" rel="noopener noreferrer" href="https://telegram.me/<Crdemon>">
                            <i className="fab fa-telegram fa-2x"></i>
                        </a>
                        <a className="footer-icon" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=380986007136">
                            <i className="fab fa-whatsapp-square fa-2x"></i>
                        </a>
                    </div>

                    <div style={{ width: '100%', textAlign: 'center', marginTop: '25px' }}>This site was designed and created by <a href="https://www.linkedin.com/in/julia-orendovskyi-026a30b6/">Julia Oren</a> & <a href="https://www.linkedin.com/in/iyar-nitzan-576184110/">Iyar Nitzan</a></div>
                </div>
                {/* -------------------RIGHT NAVIGATION------------- LANGUEGES + MESEGER  ---------------------------- */}
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
                {/*  --------------------------------------CONTACT FORM------------------------- */}
                {(!contactForm) ? null :
                    <div className="contact-form"> <Form></Form> </div>}
            </BrowserRouter >
        </MyProvider >
    );
}

export default App;