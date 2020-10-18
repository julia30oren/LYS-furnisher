import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import translate from '../../../translation/do-translate';
import picturesArr, { picturesArrCol_1, picturesArrCol_2, picturesArrCol_3 } from "../../picImports/picImporter"
import BigImg from "./BigImg";

export const Images = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [bigPicture, setBigPicture] = useState(null);

    return (
        <div className="Portfolio">
            <p>{translate('portfolio-2-text')}</p>
            <div className="row">
                {/* -------------------------------------------------------- */}
                {!bigPicture ? null :
                    <div className="big-img-div row">
                        <div className="img-div">
                            <img src={bigPicture} alt="LYS" />
                        </div>

                        <div className="button-div">
                            <button type="button" onClick={() => setBigPicture(null)}>
                                <i className="fas fa-times fa-2x"></i>
                            </button>
                            <p>{translate('portfolio-2-text')}</p>
                        </div>
                        <div className="thumbnail-col">
                            {picturesArr.map(({ pic }) => {
                                return <BigImg className="thumbnail" src={pic} onClick={() => { setBigPicture(pic) }} />
                            })}
                        </div>
                    </div>
                }
                {/* ------------------------------------PORTFOLIO-------------------------- */}
                {bigPicture ? <div style={{ height: '700px' }}></div> :
                    <div className="row">
                        <div className="porfolio-col">
                            {picturesArrCol_1.map(({ pic }) => {
                                return <BigImg key={Math.random() * 10000} name='LYS furniture' className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
                            })}
                        </div>

                        <div className="porfolio-col">
                            {picturesArrCol_2.map(({ pic }) => {
                                return <BigImg key={Math.random() * 10000} name='LYS furniture' className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
                            })}
                        </div>
                        <div className="porfolio-col">
                            {picturesArrCol_3.map(({ pic }) => {
                                return <BigImg key={Math.random() * 10000} name='LYS furniture' className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
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