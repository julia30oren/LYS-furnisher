import React, { useEffect } from 'react';
import openingVid from '../../../videos/fox_welcome_vid3.mp4';
import './Home.css';

import translate from '../../../translation/do-translate';

export const Home = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        // window.onscroll = function () { myFunction() };

        // var navbar = document.getElementById("navbar");
        // var sticky = navbar.offsetTop;

        // function myFunction() {
        //     if (window.pageYOffset >= sticky) {
        //         navbar.classList.add("sticky")
        //     } else {
        //         navbar.classList.remove("sticky");
        //     }
        // }
    }, []);



    return (
        <div className="column" style={{ width: '100%' }}>

            <video autoPlay loop muted className="openingVid" >
                <source src={openingVid} type="video/mp4" />
            </video>

            {/* <div id="navbar">
                <a class="active" href="javascript:void(0)">Home</a>
                <a href="javascript:void(0)">News</a>
                <a href="javascript:void(0)">Contact</a>
            </div> */}

            {/* <div className="video-text">
                <div className="vl"></div>
                <p className="vid-t"> {translate('loz')} </p>
            </div> */}

            <div className="HomeFirst" style={{ marginBottom: '200px' }}>
                <div className="text-1">
                    {/* <img className="img-family" src="https://i.pinimg.com/originals/8b/67/10/8b6710ba83e38508a4885c16aadbaeaf.jpg" alt="family" /> */}

                    <p className="wood-back txt-wood-1"> - {translate('home-2-text')}</p>
                    <p className="txt">{translate('home-3-text')}</p>
                    <div className="wood-texture"></div>
                </div>
                <div className="fenix" style={{ marginTop: '50px' }}>
                    <img src="https://i.pinimg.com/originals/f4/8b/1a/f48b1ae363b08c52613c4a1ff5a7305a.jpg" alt="fenix" style={{ width: '100%', padding: '5%' }} />
                </div>
            </div>

            <div className="HomeSecond">
                <div className="wood-2">
                    <p className="handmaid"> {translate('home-4-text')} </p>
                </div>
            </div>

            <div className="HomeTherd">
                <div className="row-3">
                    <img style={{ width: '55%', height: '100%' }} className="img-1-1" src="https://i.pinimg.com/originals/43/1d/af/431daf462a15169f8b6be4c71da6c885.jpg" alt="pictcher 2" />


                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%', height: '100%', margin: 'auto' }}>
                        <p className="txt">{translate('home-5-text')}</p>
                        <p className="wood-back txt-wood-2">{translate('home-6-text')}</p>
                        <p className="handmaid grey-font">{translate('home-7-text')}</p>
                        <p className="txt">{translate('home-8-text')}</p>
                    </div>
                </div>

                <div className="row-3">
                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%', height: '100%', margin: 'auto' }}>
                        <p className="handmaid grey-font">{translate('home-9-text')}</p>
                        <p className="txt">{translate('home-10-text')}</p>
                        <p className="wood-back txt-wood-5">{translate('home-11-text')}</p>
                        <p className="txt">{translate('home-12-text')}</p>
                    </div>

                    <img style={{ width: '55%', height: '100%' }} className="img-1-1" src="https://i.pinimg.com/564x/2f/ef/3e/2fef3e8f8fb581b6e37849054ad060ce.jpg" alt="pictcher 1" />

                </div>

                <div className="row-3">
                    <img style={{ width: '55%', height: '100%' }} className="img-1-1" src="https://i.pinimg.com/originals/10/52/4b/10524b2431ffaa750fb9b3757d39d963.jpg" alt="pictcher 1" />

                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%', height: '100%', margin: 'auto' }}>
                        <p className="txt">{translate('home-13-text')}</p>
                        <p className="wood-back txt-wood-4">{translate('home-14-text')}</p>
                        <p className="handmaid grey-font">{translate('home-15-text')}</p>
                        <p className="txt">{translate('home-16-text')}</p>
                    </div>
                </div>

                <div className="row-3">
                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%', height: '100%', margin: 'auto' }}>
                        <p className="handmaid grey-font">{translate('home-17-text')}</p>
                        <p className="txt">{translate('home-18-text')}</p>
                        <p className="wood-back txt-wood-3">{translate('home-19-text')}</p>
                        <p className="txt">{translate('home-20-text')}</p>

                    </div>
                    <img style={{ width: '55%', height: '100%' }} className="img-1-1" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/97061597_116044153434214_5315274869229748224_o.jpg?_nc_cat=100&_nc_sid=a26aad&_nc_ohc=mq_ee4ZQtYkAX871XOy&_nc_ht=scontent.fhfa2-2.fna&oh=77a240ce0e8348236fbc09a0ee1342bb&oe=5F9864DA" alt="pictcher 2" />
                </div>

            </div>
            <p className="handmaid grey-font" style={{ marginTop: '150px', marginBottom: '100px', fontSize: '30px' }}> {translate('home-21-text')}</p>

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
                                <img className='im' src="https://i.pinimg.com/originals/cf/4c/a7/cf4ca7657a0783f3a47a050991d37176.jpg" alt="pictcher1" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <img className='im' src="https://i.pinimg.com/originals/49/c6/79/49c679b8f33d4d7c00d16b7d5bd6052a.jpg" alt="pictcher2" />
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