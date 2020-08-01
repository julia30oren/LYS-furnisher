import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppRoutes from './appRouter/AppRoutes';
import AppLinks from './appRouter/AppLinks';
import logo from '../pic/fox-logo2.png'
// import NavBar from './NavBar';
import Footer from './Footer';
// import openingVid from '../videos/fox_welcome_vid2.mp4';

class App extends Component {
    constructor() {
        super()
        this.state = {
            language: 'ukr'
        }
    }

    changeLanguage(lang) {
        console.log(lang);
    }

    render() {
        return (

            <BrowserRouter>
                <div className="App" style={{ display: 'flex' }}>

                    {/* <video autoPlay loop muted className="openingVid" >
                        <source src={openingVid} type="video/mp4" />
                    </video>

                    <div className='box' >
                    </div>
                    <div className="loz-one">
                        <h2 style={{ fontFamily: 'Futara' }}>Family workshop of author's furniture and interior items.</h2>
                    </div>

                    <NavBar></NavBar>

                    <Switch>
                        <AppRoutes />
                    </Switch>

                    <Footer></Footer> */}

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
                            <AppLinks />
                            <li className="nav-item">
                                <p className="nav-links">
                                    <a key='17' onClick={this.changeLanguage('ukr')} href="" className="nav-text">Укр.</a>/
                                    <a key='18' onClick={this.changeLanguage('rus')} href="" className="nav-text">Рус.</a>/
                                    <a key='19' onClick={this.changeLanguage('eng')} href="" className="nav-text">Eng.</a>
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
                        <h1>{this.state.language}</h1>
                        <Switch>
                            <AppRoutes />
                        </Switch>
                        <Footer></Footer>
                    </div>

                    <div className="right-side-top"
                        style={{
                            width: '20%',
                            position: 'fixed',
                            right: '0'
                        }}
                    >
                        <h3 style={{ fontFamily: 'Futara', padding: '5%' }}>Family workshop of author's furniture and interior items.</h3>
                    </div>
                    <div className="right-side-bottom"
                        style={{
                            width: '10%',
                            position: 'fixed',
                            right: '0',
                            bottom: '40px'
                        }}
                    >
                        <button
                            style={{
                                height: '100px',
                                width: '100px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: 'rgb(255, 166, 0)'
                            }}>Contuct Us</button>
                    </div>
                </div>

            </BrowserRouter >
        );
    }
}

export default App;