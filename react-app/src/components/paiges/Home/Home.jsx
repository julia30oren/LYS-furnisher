import React, { useEffect } from 'react';
import openingVid from '../../../videos/fox_welcome_vid3.mp4';
import './Home.css';

import translate from '../../../translation/do-translate';

export const Home = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="column" style={{ width: '100%' }}>
            {/* ------------------------------------------OPENING VIDEO------------------------------------ */}
            <video autoPlay loop muted className="openingVid" >
                <source src={openingVid} type="video/mp4" />
            </video>
            {/* ------------------------------------------LOZUNG------------------------------------ */}
            <div>
                <p className="big-grey-font smaller">{translate('home-1-text')}</p>
                <p className="big-grey-font" style={{ marginTop: '0' }}>{translate('home-2-text')}</p>
            </div>
            {/* ------------------------------------------FIRST BLOK ----------- WITH FAMILY PHOTO------------------------------------ */}
            <div className="blok HomeFirst">
                <div className="first-left-col">
                    <p className="text-on-photo family-portrait"> - {translate('home-3-text')}</p>
                    <p className="handwrite">{translate('home-4-text')}</p>
                    <div className="wood-texture"></div>
                </div>
                <div className="first-right-col" >
                    {/* <img src="https://i.pinimg.com/originals/f4/8b/1a/f48b1ae363b08c52613c4a1ff5a7305a.jpg" alt="Fenix" /> */}
                </div>
            </div>
            {/* ---------------------------------------------WHAT DO WE OFFER?--------------------------- */}
            <p className="big-grey-font"> {translate('home-5-text')} </p>
            {/* ---------------------------------------------SECOND BLOK---------------------------- */}
            <div className="blok HomeSecond">

                <div className="row">
                    <div className="first-photo"></div>
                    <div className="column" style={{ width: '45%' }}>
                        <p className="handwrite">{translate('home-6-text')}</p>
                        <p className="text-on-background bg-wood1">{translate('home-7-text')}</p>
                        <p className="big-grey-font smaller">{translate('home-8-text')}</p>
                        <p className="handwrite">{translate('home-9-text')}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="column" style={{ width: '45%' }}>
                        <p className="big-grey-font smaller">{translate('home-10-text')}</p>
                        <p className="handwrite">{translate('home-11-text')}</p>
                        <p className="text-on-background bg-wood2">{translate('home-12-text')}</p>
                        <p className="handwrite">{translate('home-13-text')}</p>
                    </div>
                    <div className="second-photo"></div>
                </div>

                <div className="row">
                    <div className="column" style={{ width: '55%' }}>
                        <div className="fourth-photo"></div>
                        <div className="fifth-photo"></div>
                    </div>
                    <div className="column" style={{ width: '45%' }}>
                        <p className="handwrite">{translate('home-14-text')}</p>
                        <p className="text-on-background bg-wood3">{translate('home-15-text')}</p>
                        <p className="big-grey-font smaller">{translate('home-16-text')}</p>
                        <p className="handwrite">{translate('home-17-text')}</p>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="column" style={{ width: '45%' }}>
                        <p className="big-grey-font smaller">{translate('home-18-text')}</p>
                        <p className="handwrite">{translate('home-19-text')}</p>
                        <p className="text-on-background bg-wood4">{translate('home-20-text')}</p>
                        <p className="handwrite">{translate('home-21-text')}</p>
                    </div>
                    <div className="sixth-photo"></div>
                </div>
            </div>
            {/* ---------------------------------------------DELIVERY AND INSTALLATION-------------------------------------------------- */}
            <p className="big-grey-font x-smaller"> {translate('home-22-text')}</p>
            {/* ----------------------------------------------------CAROUSEL------------------------------------ */}
            <div className="HomeFourth">

                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators" >
                        <li data-target="#myCarousel" data-slide-to="0" className="active">
                        </li>
                        <li data-target="#myCarousel" data-slide-to="1">
                        </li>
                        <li data-target="#myCarousel" data-slide-to="2">
                        </li>
                        <li data-target="#myCarousel" data-slide-to="3">
                        </li>
                        <li data-target="#myCarousel" data-slide-to="4">
                        </li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                        <div className="item active">
                            <img className='carousel-img' src="https://i.pinimg.com/originals/cf/4c/a7/cf4ca7657a0783f3a47a050991d37176.jpg" alt="pictcher1" />
                        </div>

                        <div className="item">
                            <img className='carousel-img' src="https://i.pinimg.com/originals/49/c6/79/49c679b8f33d4d7c00d16b7d5bd6052a.jpg" alt="pictcher2" />
                        </div>

                        <div className="item">
                            <img className='carousel-img' src="https://i.pinimg.com/originals/7e/2e/d6/7e2ed693e94373a3c79d548e7401cf60.jpg" alt="pictcher3" />
                        </div>

                        <div className="item">
                            <img className='carousel-img' src="https://i.pinimg.com/originals/50/8b/23/508b238618e927ec42955690d7f4dd60.jpg" alt="pictcher5" />
                        </div>

                        <div className="item">
                            <img className='carousel-img' src="https://i.pinimg.com/originals/c1/1a/2c/c11a2cb0c1b4999e30612fe648c61f04.jpg" alt="pictcher4" />
                        </div>
                    </div>
                    {/* <!-- Left and right controls --> */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default function HomeComp(props) {

    return (
        <Home></Home>
    )
}