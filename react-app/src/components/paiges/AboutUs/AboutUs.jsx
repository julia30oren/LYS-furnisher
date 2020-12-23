import React, { useEffect } from 'react';
import translate from '../../../translation/do-translate';
import './AboutUs.css';
import './AboutUsFit.css';


export const AboutUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
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
        </div >
    )
}

export default function AboutUsComp(props) {
    return (
        <AboutUs></AboutUs>
    )
}