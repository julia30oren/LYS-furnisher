import React, { useEffect } from 'react';
import pictcher1 from '../../../pic/IMG_4108.jpg';
// import pictcher2 from '../../../pic/IMG_52508.jpg';
import pictcher3 from '../../../pic/IMG_3245.jpg';
import wood_1 from '../../../pic/ff3b5c6f6f7fd8bb4d295975a82c32bc.jpg'
import openingVid from '../../../videos/fox_welcome_vid3.mp4';
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

            <div className="HomeFirst">
                <div className="text-1">
                    <p className="txt"> </p>
                    {/* <img className="wood-1" src={wood_1} alt="wood 1" /> */}
                    <p className="txt txt-wood-1">{translate('home-1-text')}</p>
                    <p className="txt">{translate('home-2-text')}</p>
                </div>
                <div className="fenix">
                    <img src="https://i.pinimg.com/originals/f4/8b/1a/f48b1ae363b08c52613c4a1ff5a7305a.jpg" alt="fenix" style={{ width: '100%' }} />
                </div>
            </div>

            <div className="HomeSecond">
                <div className="wood-2">
                    <p className="paragraf"> {translate('home-3-text')} </p>
                </div>
                <img className="img-family" src="https://i.pinimg.com/originals/8b/67/10/8b6710ba83e38508a4885c16aadbaeaf.jpg" alt="family" />
                <p className="handmaid">{translate('home-6-text')}</p>
            </div>

            <div className="HomeTherd">
                <div className="row-3">
                    {/* <div className="img-2-2" style={{ width: '20%' }}></div> */}
                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%', height: '100%', margin: 'auto' }}>
                        <p className="txt txt-wood-2">{translate('home-4-text')}</p>
                        {/* <p className="txt">{translate('home-7-text')}</p> */}
                    </div>
                    <img style={{ width: '55%' }} className="img-1-1" src="https://i.pinimg.com/564x/2f/ef/3e/2fef3e8f8fb581b6e37849054ad060ce.jpg" alt="pictcher 1" />
                </div>
                <div className="row-3" style={{ marginTop: '20px' }}>
                    <img style={{ width: '55%' }} className="img-1-1" src="https://i.pinimg.com/originals/43/1d/af/431daf462a15169f8b6be4c71da6c885.jpg" alt="pictcher 2" />
                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%', height: '100%', margin: 'auto' }}>
                        <p className="txt txt-wood-3">{translate('home-5-text')}</p>
                        {/* <p className="txt">{translate('home-8-text')}</p> */}
                    </div>
                    {/* <div className="img-3-3" style={{ width: '20%' }}></div> */}
                </div>
                <p className="delivery-txt"> {translate('home-7-text')}</p>

                {/* <div className="wood-2">
                    <p className="paragraf">{translate('home-10-text')}</p>
                    <p className="paragraf"> {translate('home-11-text')}</p>
                </div> */}

            </div>

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
                            <div className="carousel-div">
                                <img className='im' src={pictcher1} alt="pictcher1" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <img className='im' src={pictcher3} alt="pictcher2" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <img className='im' src="https://i.pinimg.com/originals/7e/2e/d6/7e2ed693e94373a3c79d548e7401cf60.jpg" alt="pictcher3" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <img className='im' src="https://i.pinimg.com/originals/50/8b/23/508b238618e927ec42955690d7f4dd60.jpg" alt="pictcher5" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <img className='im' src="https://i.pinimg.com/originals/c1/1a/2c/c11a2cb0c1b4999e30612fe648c61f04.jpg" alt="pictcher4" />
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
        </div >
    )
}


export default function HomeComp(props) {

    return (
        <Home></Home>
    )
}