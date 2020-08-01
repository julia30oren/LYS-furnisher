import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import AboutUs from './AboutUs';
import Portfolio from './Portfolio';
import Creation from './Creation';
import Painting from './Painting';
import Contacts from './Contacts';
import openingVid from '../videos/fox_welcome_vid2.mp4';

class App extends Component {
    render() {

        return (

            <BrowserRouter>
                <div className="App">

                    <video autoPlay loop muted className="openingVid" >
                        <source src={openingVid} type="video/mp4" />
                    </video>

                    <div className='box' >
                    </div>
                    <div className="loz-one">
                        <h2 style={{ fontFamily: 'Futara' }}>Family workshop of author's furniture and interior items.</h2>
                    </div>

                    <NavBar></NavBar>

                    <Route path="/" exact render={Home} />
                    <Route path="/about" exact strict render={AboutUs} />
                    <Route path="/portfolio" exact strict render={Portfolio} />
                    <Route path="/creation" exact strict render={Creation} />
                    <Route path="/painting" exact strict render={Painting} />
                    <Route path="/contacts" exact strict render={Contacts} />
                </div>
            </BrowserRouter >
        );
    }
}

export default App;