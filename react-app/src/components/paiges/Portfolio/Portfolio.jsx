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
                                        <div className="thumbnail-2" key={Picture.pic}
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
                    <div className="row">
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
        </div>
    )
}

export default function Portfolio(props) {
    return (
        <Images></Images>
    )
}