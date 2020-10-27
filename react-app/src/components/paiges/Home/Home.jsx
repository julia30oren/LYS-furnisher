import React, { useEffect, useState, useRef } from 'react';
import openingVid from '../../../videos/fox_welcome_vid3.mp4';
import './Home.css';
import ImgSlider from './ImgSlider';
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
                <p className="big-grey-font" style={{ marginTop: '20px' }}>&laquo;{translate('home-1-text')}&raquo;</p>
                <p className="big-grey-font smaller" style={{ marginTop: '0' }}>{translate('home-2-text')}</p>
                <p className="big-grey-font smaller" style={{ marginTop: '0' }}>{translate('home-02-text')}</p>
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

                <Slider></Slider>
            </div>
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
        <div className="slider carousel-inner" >
            {sliderArray.map((item, index) => {
                return (
                    <div key={index} className="slide " style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                )
            })}
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