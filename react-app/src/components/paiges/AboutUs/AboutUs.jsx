import React, { useEffect } from 'react';
import translate from '../../../translation/do-translate';
import './AboutUs.css';


export const AboutUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="About">
                {/* ----------------------------------------------------------1------------------ */}
                {/* -----------------------------------PHOTO----------- */}
                <div className="parallax par-img"></div>
                {/* -----------------------------------TEXT BLOK------- */}
                <div className="aboutTextDiv">
                    <p>{translate('about-1-text')}</p>
                    <p>{translate('about-2-text')}</p>
                    <p>{translate('about-3-text')}</p>
                </div>
                {/* ----------------------------------------------------------2------------------ */}
                {/* -----------------------------------PHOTO----------- */}
                <div className="parallax par-img"></div>
                {/* -----------------------------------TEXT BLOK------- */}
                <div className="aboutTextDiv">
                    <p>{translate('about-4-text')}</p>
                    <p>{translate('about-5-text')}</p>
                </div>
                {/* ----------------------------------------------------------3------------------ */}
                {/* -----------------------------------PHOTO----------- */}
                <div className="parallax par-img"></div>
                {/* -----------------------------------TEXT BLOK------- */}
                <div className="aboutTextDiv">
                    <p>{translate('about-6-text')} {translate('about-7-text')}</p>
                    <p>{translate('about-8-text')}</p>
                    <br></br>
                    <p>{translate('about-9-text')}</p>
                </div>
            </div >
        </div>
    )
}

export default function AboutUsComp(props) {
    return (
        <AboutUs></AboutUs>
    )
}