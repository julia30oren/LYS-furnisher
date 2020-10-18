import React, { useEffect } from 'react';
import translate from '../../../translation/do-translate';
import './AboutUs.css';


export const AboutUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="About-component-forComp">
                <div className="parallax par-1"></div>
                <div className="aboutTextDiv">
                    <br></br>
                    <p>{translate('about-1-text')}</p>
                    <p>{translate('about-2-text')}</p>
                    <p>{translate('about-3-text')}</p>
                    <br></br>
                </div>

                <div className="parallax par-1"></div>
                <div className="aboutTextDiv">
                    <br></br>
                    <p>{translate('about-4-text')}</p>
                    <p>{translate('about-5-text')}</p>
                    <br></br>
                </div>

                <div className="parallax par-1"></div>
                <div className="aboutTextDiv">
                    <br></br>
                    <p>{translate('about-6-text')} {translate('about-7-text')}</p>
                    <p>{translate('about-8-text')}</p>
                    <br></br>
                    <p>{translate('about-9-text')}</p>
                    <br></br>
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