import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import translate from '../../../translation/do-translate';
import picturesArr, { picturesArrCol_1, picturesArrCol_2, picturesArrCol_3 } from "../../picImports/picImporter"
// import BigImg from "./BigImg";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/opacity.css';

// const dotenv = require('dotenv');
// const env = dotenv.config().parsed;
// require('dotenv').config()
// console.log(env)


export const Images = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [bigPicture, setBigPicture] = useState(null);

    return (
        <div className="Portfolio">
            <p>{translate('portfolio-2-text')}</p>
            <div className="row">
                {/* ----------------------------------BIG IMAGE---------------------- */}
                {!bigPicture ? null :
                    <div className="big-img-div row">
                        <div className="img-div">
                            <img src={bigPicture} alt="LYS" />
                            <div className="big-img-cover"></div>
                        </div>
                        <div className="button-div">
                            <button type="button" onClick={() => setBigPicture(null)}>
                                <i className="fas fa-times fa-2x"></i>
                            </button>
                            <p>{translate('portfolio-2-text')}</p>
                        </div>
                        {/* ----------------------------------THUMBNAILS---------------------- */}
                        <div className="thumbnail-col">
                            {picturesArr.map((Picture) => {
                                return (
                                    <div className="thumbnail-2" key={Picture.pic}
                                        style={{ backgroundImage: `url(${Picture.pic})`, backgroundSize: 'cover', height: `${Picture.h}px`, width: `300px` }}
                                        onClick={() => { setBigPicture(Picture.pic) }}>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {/* ------------------------------------PORTFOLIO-------------------------- */}
                {bigPicture ? <div style={{ height: '700px' }}></div> :
                    <div className="row">
                        <div className="porfolio-col">
                            {picturesArrCol_1.map((Picture) => {
                                return (
                                    <div className="portfolio-img" key={Picture.pic}
                                        style={{ backgroundImage: `url(${Picture.pic})`, backgroundSize: 'cover', height: `${Picture.h}px`, width: `400px` }}
                                        onClick={() => { setBigPicture(Picture.pic) }}>
                                        <div className="showme"> &copy; LYS furniture</div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="porfolio-col">
                            {picturesArrCol_2.map((Picture) => {
                                return (
                                    <div className="portfolio-img" key={Picture.pic}
                                        style={{ backgroundImage: `url(${Picture.pic})`, backgroundSize: 'cover', height: `${Picture.h}px`, width: `400px` }}
                                        onClick={() => { setBigPicture(Picture.pic) }}>
                                        <div className="showme"> &copy; LYS furniture</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="porfolio-col">
                            {picturesArrCol_3.map((Picture) => {
                                return (
                                    <div className="portfolio-img" key={Picture.pic}
                                        style={{ backgroundImage: `url(${Picture.pic})`, backgroundSize: 'cover', height: `${Picture.h}px`, width: `400px` }}
                                        onClick={() => { setBigPicture(Picture.pic) }}>
                                        <div className="showme"> &copy; LYS furniture</div>
                                    </div>
                                )
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