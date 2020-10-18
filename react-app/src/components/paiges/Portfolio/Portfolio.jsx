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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className="portfolio-tit">{translate('portfolio-2-text')}</p>
            <div className="row">

                {!bigPicture ? null :
                    <div className="big-img-div row" style={{ width: '100%' }} >

                        <div className="big-pic">
                            <button className="close-b" type="button" onClick={() => setBigPicture(null)}>
                                <i className="fas fa-times  fa-3x"></i>
                            </button>
                            <img src={bigPicture} alt="" className="big-img" />
                            <p className="thumbnail-text">{translate('portfolio-2-text')}</p>
                        </div>
                        <div className="column thumbnail-col">
                            {picturesArr.map(({ pic }) => {
                                return <BigImg className="thumbnail" src={pic} onClick={() => { setBigPicture(pic) }} />
                            })}
                        </div>
                    </div>
                }
                {/* -------------------------------------------------------- */}
                <div className="porfolio-col-2">
                    {picturesArrCol_1.map(({ pic }) => {
                        return <BigImg key={Math.random() * 10000} name='LYS furniture' className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
                    })}
                </div>

                <div className="porfolio-col-2">
                    {picturesArrCol_2.map(({ pic }) => {
                        return <BigImg key={Math.random() * 10000} name='LYS furniture' className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
                    })}
                </div>
                <div className="porfolio-col-2">
                    {picturesArrCol_3.map(({ pic }) => {
                        return <BigImg key={Math.random() * 10000} name='LYS furniture' className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
                    })}
                </div>
                {/* --------------------------------------------------- */}

            </div>
        </div>
    )
}

export default function Portfolio(props) {
    return (
        <Images></Images>
    )
}