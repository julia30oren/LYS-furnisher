import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import './PortfolioFit.css';
import translate from '../../../translation/do-translate';
import picturesArr, { picturesArrCol_1, picturesArrCol_2, picturesArrCol_3 } from "../../picImports/picImporter";
import BigImg from "./BigImg";

export const Images = (props) => {

    const [bigPicture, setBigPicture] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        // changing message to user depending on browser language
        // and disable right click
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            let message;
            if (navigator.language === 'ru' || navigator.language === 'ru-RU') {
                message = 'Вы не можете сохранять изображения или видео с этого сайта! Все права на изображения пренадлежать владельцам сайта.';
            } else if (navigator.language === 'uk' || navigator.language === 'uk-UA') {
                message = 'Ви не можете зберігати зображення або відео з цього сайту! Всі права на зображення належати власникам сайту.';
            } else message = 'You cannot save images or videos from this site! All rights to images belong to the site owners.';
            alert(message);
        });
    }, []);


    return (
        <div className="Portfolio">
            <p>{translate('portfolio-2-text')}</p>
            <p>{translate('portfolio-3-text')}</p>

            <div className="row">
                {/* ----------------------------------BIG IMAGE---------------------- */}
                {!bigPicture ? null :
                    <div className="big-img-div">

                        <div className="img-div">
                            <img src={bigPicture} alt="LYS" />
                            <div className="big-img-cover"></div>
                        </div>

                        <div className="right-div">
                            <div className="button-div">
                                <button type="button" onClick={() => setBigPicture(null)}>
                                    <i className="fas fa-times fa-2x"></i>
                                </button>
                                <p>{translate('portfolio-2-text')}</p>
                                <p>{translate('portfolio-3-text')}</p>
                            </div>
                            {/* ----------------------------------THUMBNAILS---------------------- */}
                            <div className="thumbnail-col">
                                {picturesArr.map((Picture) => {
                                    return (
                                        <div className="thumbnail" key={Picture.pic}
                                            style={{ backgroundImage: `url(${Picture.pic})`, backgroundSize: 'cover', height: `${Picture.h}px`, width: `100%` }}
                                            onClick={() => { setBigPicture(Picture.pic) }}>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                }
                {/* ------------------------------------PORTFOLIO-------------------------- */}
                {bigPicture ? <div style={{ height: '700px' }}></div> :
                    <div>
                        <div className="porfolio-col">
                            {picturesArrCol_1.map((Picture) => {
                                return <BigImg name='LYS furniture' className="portfolio-img"
                                    key={Picture.pic} src={Picture.pic}
                                    onClick={() => { if (window.innerWidth > 1195) { setBigPicture(Picture.pic) } }} />
                            })}
                        </div>

                        <div className="porfolio-col">
                            {picturesArrCol_2.map((Picture) => {
                                return <BigImg
                                    key={Picture.pic} name='LYS furniture' className="portfolio-img" src={Picture.pic}
                                    onClick={() => { if (window.innerWidth > 1195) { setBigPicture(Picture.pic) } }} />
                            })}
                        </div>
                        <div className="porfolio-col">
                            {picturesArrCol_3.map((Picture) => {
                                return <BigImg
                                    key={Picture.pic} name='LYS furniture' className="portfolio-img" src={Picture.pic}
                                    onClick={() => { if (window.innerWidth > 1195) { setBigPicture(Picture.pic) } }} />
                            })}
                        </div>
                    </div>

                }
            </div>
            {/* ------------------FOOTER----------------- */}

            <div id="footer">
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

            <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>This site was designed and created by <a href="https://www.linkedin.com/in/julia-orendovskyi-026a30b6/">Julia Oren</a> & <a href="https://www.linkedin.com/in/iyar-nitzan-576184110/">Iyar Nitzan</a></div>
            {/* ----------------- */}
        </div>
    )
}

export default function Portfolio(props) {
    return (
        <Images></Images>
    )
}