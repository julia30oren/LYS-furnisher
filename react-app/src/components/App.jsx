import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoutes from './appRouter/AppRoutes';
import AppLinks from './appRouter/AppLinks';
import logo from '../pic/fox-logo2.png';
import Footer from './Footer';
import Form from './Form';

import { MyProvider, LOCALES } from '../translation';
import translate from '../translation/do-translate';

function App() {

    const [locale, setLocale] = useState(LOCALES.UKRAINIAN);
    const [contactForm, setContactForm] = useState(false);


    return (
        <MyProvider locale={locale}>
            <BrowserRouter>
                <div className="App" style={{ display: 'flex' }}>

                    <div className="left-side-top"
                        style={{
                            width: '20%',
                            position: 'fixed',
                            left: '0'
                        }}
                    >
                        <img src={logo} alt="Logo" style={{ width: '90%' }} />
                    </div>

                    <div className="left-side-bottom"
                        style={{
                            width: '20%',
                            position: 'fixed',
                            left: '0',
                            bottom: '20px',
                            paddingRight: '3%',
                            paddingLeft: '3%'
                        }}
                    >
                        <ul>
                            <li className="nav-item">
                                <AppLinks />
                                <p className="nav-links">
                                    <button onClick={() => { setLocale(LOCALES.UKRAINIAN) }} className="lang-button">
                                        <p className="lang">Укр.</p></button>/
                                        <button onClick={() => { setLocale(LOCALES.RUSSIAN) }} className="lang-button">
                                        <p className="lang">Рус.</p></button>/
                                        <button onClick={() => { setLocale(LOCALES.ENGLISH) }} className="lang-button">
                                        <p className="lang">Eng.</p></button>
                                    <i className="fas fa-angle-double-right"></i>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="main"
                        style={{
                            marginLeft: '20%',
                            width: '60%',
                            height: '100%'
                        }}
                    >
                        <Switch>
                            <AppRoutes />
                        </Switch>
                        <Footer></Footer>
                        <br />
                    </div>

                    <div className="right-side-top"
                        style={{
                            width: '20%',
                            position: 'fixed',
                            right: '0',
                        }}
                    >
                        <h3 style={{
                            padding: '1%',
                            marginLeft: '11%',
                            fontFamily: 'Century Gothic'

                        }}>
                            {translate('loz')}</h3>
                    </div>

                    <div className="right-side-bottom"
                        style={{
                            width: '10%',
                            position: 'fixed',
                            right: '2.5%',
                            bottom: '40px'
                        }}
                    >
                        <button id='contuct-button' onClick={() => { setContactForm(!contactForm); console.log(contactForm) }}>
                            <i className="far fa-comment-dots fa-3x"></i>
                        </button>
                        {contactForm ? <div><Form></Form></div> : null}
                    </div>
                </div>

            </BrowserRouter >
        </MyProvider>
    );
}

export default App;