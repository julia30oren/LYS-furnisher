import React, { useEffect } from 'react';
import pictcher1 from '../../../pic/IMG_4108.jpg';
import pictcher2 from '../../../pic/IMG_52508.jpg';
import pictcher3 from '../../../pic/IMG_3245.jpg';
import wood_1 from '../../../pic/ff3b5c6f6f7fd8bb4d295975a82c32bc.jpg'
import openingVid from '../../../videos/fox_welcome_vid2.mp4';
import './Home.css';

import translate from '../../../translation/do-translate';

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
                    <p style={{ padding: '5%' }} className="paragraf"> {translate('home-1-text')}</p>
                    <img className="wood-1" src={wood_1} alt="wood 1" />
                    <p style={{ padding: '5%' }} className="paragraf"> {translate('home-2-text')}</p>
                </div>
                <div className="fenix">
                    <img src="https://i.pinimg.com/originals/f4/8b/1a/f48b1ae363b08c52613c4a1ff5a7305a.jpg" alt="fenix" style={{ width: '100%' }} />
                </div>
            </div>

            <div className="HomeSecond">
                <div className="wood-2">
                    <p className="paragraf"> {translate('home-5-text')} </p>
                    <p className="paragraf"> {translate('home-3-text')} &laquo;LYS&raquo; .</p>
                </div>
                <img className="img-family" src="https://i.pinimg.com/originals/8b/67/10/8b6710ba83e38508a4885c16aadbaeaf.jpg" alt="family" />
                <p className="handmaid">{translate('home-6-text')}</p>
            </div>

            <div className="HomeTherd">
                <div className="row-3">
                    <div className="img-2-2"></div>
                    <p className="txt">{translate('home-4-text')}</p>
                    <img className="img-1-1" src="https://i.pinimg.com/originals/1e/17/32/1e1732840a1021d3c5f3999d2c298788.jpg" alt="pictcher 1" />
                </div>
                <div className="row-3">
                    <img className="img-1-1" src="https://i.pinimg.com/originals/69/7d/80/697d80a8b2df3dfc20b4d01ed55a6cf9.jpg" alt="pictcher 2" />
                    <p className="txt">{translate('home-5-text')}</p>
                    <div className="img-3-3"></div>
                </div>



                <div className="wood-2">
                    <p className="paragraf">{translate('home-7-text')}</p>
                    <p className="paragraf"> {translate('home-8-text')}</p>
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