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
                    <p>{translate('about-8-text')}</p>
                    <p>{translate('about-9-text')}</p>
                    <p>{translate('about-10-text')} &laquo;LYS&raquo; .</p>
                    <br></br>
                </div>

                <div className="parallax par-1"></div>
                <div className="aboutTextDiv">
                    <br></br>
                    <p>{translate('about-1-text')} {translate('about-2-text')}</p>
                    <p>{translate('about-3-text')}</p>
                    <br></br>
                </div>

                <div className="parallax par-1"></div>
                <div className="aboutTextDiv">
                    <br></br>
                    <p>{translate('about-4-text')} {translate('about-5-text')}</p>
                    <p>{translate('about-6-text')}</p>
                    <br></br>
                </div>
            </div >

            {/* <div className="About-component-forphone">
                <img src="https://i.pinimg.com/originals/ac/d0/30/acd0308e6c410615b16182062f8b29db.jpg" className="alternative" alt="..." />
                <p className="aboutTextPhone">{translate('about-1-text')} {translate('about-2-text')}</p>
                <p className="aboutTextPhone">{translate('about-3-text')}</p>
                <img src="https://i.pinimg.com/originals/03/3f/be/033fbebcc807f3272e7436d6bf6b727f.jpg" className="alternative" alt="..." />
                <p className="aboutTextPhone">{translate('about-4-text')} {translate('about-5-text')}</p>
                <p className="aboutTextPhone">{translate('about-6-text')}</p>
            </div> */}
        </div>
    )
}

export default function AboutUsComp(props) {
    return (
        <AboutUs></AboutUs>
    )
}