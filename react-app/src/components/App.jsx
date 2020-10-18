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
                    {/* <img style={{ width: '200px' }} src="https://i.pinimg.com/originals/1a/76/c2/1a76c279cec0c64425bf977eeafeccf1.png" /> */}
                    <img src="https://i.pinimg.com/originals/aa/bd/f3/aabdf3d89c7449946d5ddea47f8a01af.png " />
                    <div style={{ position: 'fixed', zIndex: '5', right: '50px', top: '400px' }}>
                        <ul>
                            <li>
                                <button className="right-nav-button" onClick={() => { setLocale(LOCALES.UKRAINIAN) }}><p> Укр. </p></button>
                            </li>
                            <li>
                                <button className="right-nav-button" onClick={() => { setLocale(LOCALES.RUSSIAN) }}><p> Рус. </p></button>
                            </li>
                            <li>
                                <button className="right-nav-button" onClick={() => { setLocale(LOCALES.ENGLISH) }}><p> Eng. </p></button>
                            </li>
                            <li>
                                <button className="right-nav-button" id='contuct-button-2' onClick={() => { setContactForm(!contactForm) }}>
                                    <p>{!contactForm ? <i className="far fa-comment-dots fa-2x"></i> : <i className="fas fa-times  fa-3x"></i>}</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <img style={{ marginTop: '-100px' }} src="https://i.pinimg.com/originals/cd/22/1f/cd221f9df05fda9bd84693f7739c736a.png" />
                </div>
                {/*  --------------------------------------CONTACT FORM------------------------- */}
                {(!contactForm) ? null :
                    <div className="contact-form"> <Form></Form> </div>}

            </BrowserRouter >
        </MyProvider >
    );
}

export default App;