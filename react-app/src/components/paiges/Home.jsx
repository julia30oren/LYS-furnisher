import React, { useEffect } from 'react';
import pictcher1 from '../../pic/IMG_4108.jpg';
import pictcher2 from '../../pic/IMG_52508.jpg';
import pictcher3 from '../../pic/IMG_3245.jpg';
import pictcher4 from '../../pic/DSC_0495.jpg';
import pictcher5 from '../../pic/DSC_0764.jpg';
import family from '../../pic/aboutUs.jpg';
import fenix from '../../pic/DSC_0200.JPG';
import wood_1 from '../../pic/ff3b5c6f6f7fd8bb4d295975a82c32bc.jpg'
import openingVid from '../../videos/fox_welcome_vid2.mp4';
import './Home.css';

import translate from '../../translation/do-translate';

export const Home = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="column" style={{ width: '100%' }}>
            <video autoPlay loop muted className="openingVid" >
                <source src={openingVid} type="video/mp4" />
            </video>
            <div className="video-text">
                <div className="vl"></div>
                <p className="vid-t"> {translate('loz')} </p>
            </div>
            <p className="LYS">LYS</p>

            <div className="HomeFirst">
                <div className="text-1">
                    <p style={{ padding: '5%' }}> {translate('home-1-text')}</p>
                    <img className="wood-1" src={wood_1} alt="wood 1" />
                    <p style={{ padding: '5%' }}> {translate('home-2-text')}</p>
                </div>
                <div className="fenix">
                    <img src={fenix} alt="fenix" style={{ width: '100%' }} />
                </div>
            </div>

            <div className="HomeSecond">
                <div className="wood-2">
                    <p> {translate('home-5-text')} </p>
                    <p> {translate('home-3-text')} &laquo;LYS&raquo; .</p>
                </div>
                <img className="img-family" src={family} alt="..." />
                {/* <img className="sketch" src={sketch} alt="..." /> */}
                <p className="handmaid">{translate('home-6-text')}</p>
            </div>

            <div className="HomeTherd">
                <div className="row-3">
                    <div className="img-2"></div>
                    <p className="txt">{translate('home-4-text')}</p>
                    <img className="img-1" src={pictcher4} alt="..." />
                </div>
                <div className="row-3">
                    <img className="img-1" src={pictcher5} alt="..." />
                    <p className="txt">{translate('home-5-text')}</p>
                    <div className="img-3"></div>
                </div>



                <div className="wood-2">
                    <p>{translate('home-7-text')}</p>
                    <p>{translate('home-8-text')}</p>
                </div>

            </div>

            <div className="HomeFourth">
                <br />
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators" >
                        <li data-target="#myCarousel" data-slide-to="0" className="active">
                        </li>
                        <li data-target="#myCarousel" data-slide-to="1">
                        </li>
                        <li data-target="#myCarousel" data-slide-to="2">
                        </li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                        <div className="item active">


                            <div className="carousel-div">
                                <p className="carousel-text">
                                    {translate('home-10-text')}
                                </p>
                                <img className='im' src={pictcher1} alt="pictcher1" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <p className="carousel-text">
                                    {translate('home-11-text')}
                                </p>
                                <img className='im' src={pictcher2} alt="pictcher2" />
                            </div>

                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <p className="carousel-text">
                                    {translate('home-12-text')}
                                </p>
                                <img className='im' src={pictcher3} alt="pictcher3" />
                            </div>

                        </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <p className="delivery-txt"> {translate('home-9-text')}</p>
        </div >
    )
}


export default function HomeComp(props) {

    return (
        <Home></Home>
    )
}