import React, { useEffect, useState, useRef } from 'react';
import openingVid from '../../../videos/home-video-LYS.mp4';
import './Home.css';
import './HomeFit.css';
import ImgSlider from './ImgSlider';
import translate from '../../../translation/do-translate';


export const Home = (props) => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        // changing message to user depending on browser language
        if (navigator.language === 'ru' || navigator.language === 'ru-RU') {
            setMessage('Вы не можете сохранять изображения или видео с этого сайта! Все права на изображения пренадлежать владельцам сайта.');
        } else if (navigator.language === 'uk' || navigator.language === 'uk-UA') {
            setMessage('Ви не можете зберігати зображення або відео з цього сайту! Всі права на зображення належати власникам сайту.');
        } else setMessage('You cannot save images or videos from this site! All rights to images belong to the site owners.');
    }, []);

    return (
        <div className="Home">
            {/* ------------------------------------------OPENING VIDEO------------------------------------ */}
            <video autoPlay loop muted className="openingVid" onMouseDown={(e) => { e.preventDefault(); alert(message) }}>
                <source src={openingVid} type="video/mp4" />
            </video>

            {/* ------------------------------------------LOZUNG------------------------------------ */}
            <div className="big-grey-font" >
                <p style={{ marginTop: '20px', fontSize: 'xxx-large', textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.3)', fontFamily: '"Times New Roman", Times, serif' }}>LYS</p>
                <p style={{ textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.3)', fontSize: 'xx-large' }}>{translate('home-2-text')}</p>
            </div>

            {/* ------------------------------------------FIRST BLOK ----------- WITH FAMILY PHOTO------------------------------------ */}
            <div id="family-portret">
                <img style={{ width: '100%' }} onMouseDown={(e) => { e.preventDefault(); alert(message) }} src="https://i.pinimg.com/originals/8b/67/10/8b6710ba83e38508a4885c16aadbaeaf.jpg" alt="Family portret" />
                <p className="text-on-photo"> - {translate('home-3-text')}</p>
                <p className="handwrite">{translate('home-4-text')}</p>
            </div>

            <div id="fenix">
                <img style={{ width: '100%' }} onMouseDown={(e) => { e.preventDefault(); alert(message) }} src="https://i.pinimg.com/originals/f4/8b/1a/f48b1ae363b08c52613c4a1ff5a7305a.jpg" alt="LYS fenix" />
            </div>

            {/* ---------------------------------------------WHAT DO WE OFFER?--------------------------- */}
            <div style={{ marginTop: '70px', marginBottom: '20px' }}>
                <p className="big-grey-font">{translate('home-5-text')}</p>
            </div>

            {/* ---------------------------------------------SECOND BLOK---------------------------- */}
            {/* --------------------------------------1--- */}
            <div id="tx-blok-1">
                <p className="handwrite">{translate('home-6-text')}</p>
                <p className="text-on-background bg-wood1">{translate('home-7-text')}</p>
                <p className="big-grey-font smaller">{translate('home-8-text')}</p>
                <p className="handwrite">{translate('home-9-text')}</p>
            </div>

            <div className="img-blok" id="img-blok-1">
                <img style={{ width: '100%' }} onMouseDown={(e) => { e.preventDefault(); alert(message) }} src="https://i.pinimg.com/originals/e5/44/cc/e544cc9a6253ab2a04f4368337baf253.jpg" alt="LYS" />
                <img style={{ width: '100%' }} onMouseDown={(e) => { e.preventDefault(); alert(message) }} src="https://i.pinimg.com/originals/0b/27/23/0b272390968aae3b60aa1e9d59689bd8.jpg" alt="LYS" />
            </div>
            {/* ----------------------------2-- */}
            <div id="tx-blok-2">
                <p className="handwrite">{translate('home-12-text')}</p>
                <div className="text-on-background bg-wood2">
                    <p>{translate('home-13-1-text')}</p>
                    <p>{translate('home-13-2-text')}</p>
                </div>
                <p className="big-grey-font smaller">{translate('home-14-text')}</p>
                <div className="handwrite">
                    <p>{translate('home-15-1-text')}</p>
                    <p>{translate('home-15-2-text')}</p>
                </div>
            </div>

            <div className="img-blok" id="img-blok-2">
                <img style={{ width: '100%' }} onMouseDown={(e) => { e.preventDefault(); alert(message) }} src="https://i.pinimg.com/originals/79/75/8c/79758c6017a10a7ba714638372e506fc.jpg" alt="LYS" />
            </div>
            {/* ----------------------------3-- */}
            <div id="tx-blok-3">
                <p className="handwrite">{translate('home-10-text')}</p>
                <p className="text-on-background bg-wood3">{translate('home-11-text')}</p>
                <p className="big-grey-font smaller">{translate('home-16-text')}</p>
                <p className="handwrite">{translate('home-17-text')}</p>
            </div>

            <div className="img-blok" id="img-blok-3">
                <img style={{ width: '100%' }} onMouseDown={(e) => { e.preventDefault(); alert(message) }} src="https://i.pinimg.com/originals/43/1d/af/431daf462a15169f8b6be4c71da6c885.jpg" alt="LYS" />
                <img style={{ width: '100%' }} onMouseDown={(e) => { e.preventDefault(); alert(message) }} src="https://i.pinimg.com/originals/b1/37/57/b1375741d22229d6260b673aeb1de06e.jpg" alt="LYS" />
            </div>

            {/* -----------------------4-- */}
            <div id="tx-blok-4">
                <p className="handwrite" id="sec">{translate('home-18-text')}</p>
                <p className="text-on-background bg-wood4">{translate('home-19-text')}</p>
                <p className="big-grey-font smaller">{translate('home-20-text')}</p>
                <p className="handwrite">{translate('home-21-text')}</p>
            </div>

            <div className="img-blok" id="img-blok-4">
                <img style={{ width: '100%' }} onMouseDown={(e) => { e.preventDefault(); alert(message) }} src="https://i.pinimg.com/originals/8b/37/2e/8b372e8cac4c20a1480bc648060f5cf5.jpg" alt="LYS" />
            </div>

            {/* ---------------------------------------------DELIVERY AND INSTALLATION-------------------------------------------------- */}
            <p className="big-grey-font x-smaller"> {translate('home-22-text')}</p>
            {/* ----------------------------------------------------CAROUSEL------------------------------------ */}
            <div className="HomeFourth">
                <Slider></Slider>
            </div>

            {/* ------------------FOOTER----------------- */}
            <div className="footer">
                <div className="icons">
                    <a className="footer-icon" href="https://www.google.com/maps?ll=49.758776,24.015178&z=15&t=m&hl=en&gl=IL&mapclient=embed&cid=7705576045394627295" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-map-marker-alt fa-2x"></i>
                    </a>
                    <a className="footer-icon" href="https://www.instagram.com/lys.furniture.ua/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a className="footer-icon" href="https://www.facebook.com/lys.furniture.ua" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </a>
                    <a className="footer-icon" target="_blank" rel="noopener noreferrer" href="viber://chat?number=%2B380934864811" >
                        <i className="fab fa-viber fa-2x"></i>
                    </a>
                    <a className="footer-icon" target="_blank" rel="noopener noreferrer" href="https://t.me/LYS_FAMILY_furniture" >
                        <i className="fab fa-telegram fa-2x"></i>
                    </a>
                    <a className="footer-icon" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=380986007136">
                        <i className="fab fa-whatsapp-square fa-2x"></i>
                    </a>
                </div>

                <div className="creators">This site was designed and created by
                    <a href="https://www.linkedin.com/in/julia-orendovskyi-026a30b6/">Julia Oren</a> &
                    <a href="https://www.linkedin.com/in/iyar-nitzan-576184110/">Iyar Nitzan</a>
                </div>
            </div>

            {/* ----------------- */}
        </div>
    )
}


export const Slider = (props) => {

    let sliderArray = [
        <ImgSlider src='https://i.pinimg.com/originals/4a/c2/39/4ac2399f20f1ae5fdf4aa7a3eb7520e4.jpg' title={translate('slider-1-titile')} text={translate('slider-1-text')}></ImgSlider>,
        <ImgSlider src='https://i.pinimg.com/originals/f3/f0/73/f3f073cb9a9504eebeea7740a1fe6c2a.jpg' title={translate('slider-2-titile')} text={translate('slider-2-text')}></ImgSlider>,
        <ImgSlider src='https://i.pinimg.com/originals/58/79/b1/5879b1d77c1e62832e9e155596327775.jpg' title={translate('slider-3-titile')} text={translate('slider-3-text')}></ImgSlider>,
        <ImgSlider src='https://i.pinimg.com/originals/d4/81/16/d481161147c8343bdb869403133d758b.jpg' title={translate('slider-4-titile')} text={translate('slider-4-text')}></ImgSlider>,
        <ImgSlider src='https://i.pinimg.com/originals/ab/c4/8c/abc48c985a9d2ebcace8fea4767ec2a2.jpg' title={translate('slider-5-titile')} text={translate('slider-5-text')}></ImgSlider>,
    ];

    const [x, setX] = useState(0);
    const [pos, setPos] = useState(1);
    const xRef = useRef(x);
    xRef.current = x;

    useEffect(() => {
        setInterval(() => {
            let newX = xRef.current - 100;
            if (newX === -500) {
                setX(0);
                newX = 0;
            } else {
                setX(newX);
            }
        }, 5000);
    }, []);


    const goLeft = () => {
        if (x === 0) {
            setX(-100 * (sliderArray.length - 1));
            setPos(5);
        } else {
            setX(x + 100);
            setPos(pos - 1);
        }
    };

    const goRight = () => {
        if (x === -100 * (sliderArray.length - 1)) {
            setX(0);
            setPos(1);
        } else {
            setX(x - 100);
            setPos(pos + 1);
        }
    };

    return (
        <div className="carousel-inner" >
            {sliderArray.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                )
            })}
            {/* slider cover */}
            {/* <div id="slider-cover"></div> */}
            {/* slider buttons */}
            <a className="sliderButtons" id="goLeft" href="#demo" onClick={goLeft}>
                <i className="fas fa-angle-left fa-3x"></i>
            </a>
            <a className="sliderButtons" id="goRight" href="#demo" onClick={goRight}>
                <i className="fas fa-angle-right  fa-3x"></i>
            </a>
        </div>
    )
}

export default function HomeComp(props) {
    return (
        <Home></Home>
    )
}