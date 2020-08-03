import React from 'react';
import pictcher1 from '../../pic/IMG_4108.jpg';
import pictcher2 from '../../pic/IMG_52508.jpg';
import pictcher3 from '../../pic/IMG_3245.jpg';
import pictcher4 from '../../pic/DSC_0833.jpg';
import fenix from '../../pic/DSC_0200.JPG';
import openingVid from '../../videos/fox_welcome_vid2.mp4';
import translate from '../../translation/do-translate';


export default function Home(props) {

    return (
        <div className="HomeMain">
            <div className="opening">
                <video autoPlay loop muted className="openingVid" >
                    <source src={openingVid} type="video/mp4" />
                </video>
                <div className="yellow-box-one"></div>
            </div>

            <div className="HomeFirst">
                <div style={{
                    width: '20%',
                    marginLeft: '7%',
                    marginTop: '250px',
                    top: '750'
                }}>
                    <p style={{
                        fontSize: 'large'
                    }}>
                        {translate('home-1-text')}</p>
                </div>
                <div className="yellow-box-two"></div>
                <img src={fenix} alt="fenix" className="img-one" />
                <text className="LYS" style={{
                    fontSize: '200px',
                    fontFamily: 'Futara',
                    color: 'rgba(128, 128, 128, 0.3)'
                }}>
                    LYS</text>
            </div>

            <div className="HomeSecond">
                <div style={{
                    fontSize: 'xx-large',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    {translate('home-2-text')}</div>
                <br />
                <div className="img-family"></div>
                <div className="yellow-box-three" style={{
                    fontSize: 'x-large',
                    width: '20%',
                    textAlign: 'center',
                    backgroundColor: 'rgb(255, 166, 0)',
                    padding: '3%'
                }}>
                    {translate('home-3-text')} &laquo;LYS&raquo; .</div>
                {/* <img className="logo" src={} alt="" /> */}
                <div className="text3">
                    <p>{translate('home-4-text')}</p>
                </div>
            </div>

            <div className="HomeThird">
                <div className="row">
                    <div style={{
                        width: '35%',
                        fontSize: 'x-large',
                        // marginTop: '15%',
                        marginLeft: '5%'
                    }}>
                        {translate('home-5-text')}
                    </div>
                    <img className="img-1" src={pictcher4} alt="" />
                </div>
                <div className="row">
                    <div className="img-2"></div>
                    <p style={{
                        padding: '2%',
                        fontSize: 'xx-large',
                        backgroundColor: 'rgb(255, 166, 0)',
                        marginLeft: '55%',
                        marginTop: '30%',
                        zIndex: '4',
                        textAlign: 'center',
                        width: '600px',
                        fontFamily: 'Century Gothic'

                    }}>
                        {translate('home-6-text')}</p>
                </div>
                <div className="row">
                    <div style={{
                        width: '50%',
                        color: 'white',
                        zIndex: '4',
                        fontSize: 'xx-large',
                        marginLeft: '5%',
                        marginTop: '5%',
                    }}>
                        {translate('home-7-text')}</div>
                    <div style={{
                        width: '20%',
                        marginLeft: '77%',
                        marginTop: '5%',
                        fontSize: 'large',
                        textAlign: 'center',

                    }}>
                        {translate('home-8-text')}</div>
                </div>
                <br /><br />
                <div style={{
                    fontSize: 'xxx-large',
                    textAlign: 'center',
                    fontFamily: 'Century Gothic'
                }}>
                    {translate('home-9-text')}</div>
            </div>

            <div className="HomeFourth" style={{ height: '700px' }}>
                <br />
                <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{ height: '650px' }}>
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
                    <div className="carousel-inner" style={{ height: '100%' }}>
                        <div className="item active">
                            <div className="carousel-div">
                                <p style={{ textAlign: 'center', fontSize: 'x-large' }}>
                                    {translate('home-10-text')}</p>
                            </div>
                            <img src={pictcher1} alt="pictcher1" style={{ width: '100%' }} />
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <p style={{ textAlign: 'center', fontSize: 'x-large' }}>
                                    {translate('home-11-text')}</p>
                            </div>
                            <img src={pictcher2} alt="pictcher2" style={{ width: '100%' }} />
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <p style={{ textAlign: 'center', fontSize: 'x-large' }}>
                                    {translate('home-12-text')}</p>
                            </div>
                            <img src={pictcher3} alt="pictcher3" style={{ width: '100%' }} />
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
        </div>
    )
}