import React, { useEffect } from 'react';
import translate from '../../../translation/do-translate';
import './Coating.css';

export const Coating = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="Coating">

            <div className="coating-row">
                <div className="texture-img img-1" ></div>
                <div className="texture-txt">
                    <h5 className="big-text">{translate('coating-2-row-1')}</h5>
                    <p className="sm-text">{translate('coating-2-text')}</p>
                    <div className='list'>
                        <li>{translate('coating-2-row-2')}</li>
                        <li>{translate('coating-2-row-3')}</li>
                    </div>
                    <br />
                    <p>{translate('coating-2-row-4')}</p>
                </div>
            </div>

            <div className="coating-row">

                <div className="texture-txt">
                    <h5 className="big-text">{translate('coating-3-row-1')}</h5>
                    <p className="sm-text">{translate('coating-2-text')}</p>
                    <div className='list'>
                        <li>{translate('coating-3-row-2')}</li>
                        <li>{translate('coating-3-row-3')}</li>
                    </div>
                    <br />
                    <p>{translate('coating-3-row-4')}</p>
                </div>
                <div className="texture-img img-2"></div>
            </div>

            <div className="coating-row">
                <div className="texture-img img-3"></div>
                <div className="texture-txt">
                    <h5 className="big-text">{translate('coating-4-row-1')}</h5>
                    <p className="sm-text">{translate('coating-2-text')}</p>
                    <div className='list'>
                        <li>{translate('coating-4-row-2')}</li>
                        <li>{translate('coating-4-row-3')}</li>
                    </div>
                    <br />
                    <p>{translate('coating-4-row-4')}</p>
                </div>
            </div>

            <div className="coating-row">
                <div className="texture-txt">
                    <h5 className="big-text"> {translate('coating-5-row-1')}</h5>
                    <p className="sm-text">{translate('coating-2-text')}</p>
                    <div className='list'>
                        <li>{translate('coating-5-row-2')}</li>
                        <li>{translate('coating-5-row-3')}</li>
                        <li>{translate('coating-5-row-4')}</li>
                    </div>
                    <br />
                    <p>{translate('coating-5-row-5')}</p>
                </div>
                <div className="texture-img img-4"></div>

            </div>

            <div className="coating-row">
                <div className="texture-img img-5"></div>
                <div className="texture-txt">
                    <h5 className="big-text">{translate('coating-6-row-1')}</h5>
                    <p className="sm-text">{translate('coating-2-text')}</p>
                    <div className='list'>
                        <li>{translate('coating-6-row-2')}</li>
                        <li>{translate('coating-6-row-3')}</li>
                        <li>{translate('coating-6-row-4')}</li>
                        <li>{translate('coating-6-row-5')}</li>
                    </div>
                    <br />
                    <p>{translate('coating-6-row-6')}</p>
                </div>
            </div>

            <div className="coating-row">
                <div className="texture-txt">
                    <h5 className="big-text">{translate('coating-7-row-1')}</h5>
                    <p className="sm-text">{translate('coating-2-text')}</p>
                    <div className='list'>
                        <li>{translate('coating-7-row-2')}</li>
                        <li>{translate('coating-7-row-3')}</li>
                        <li>{translate('coating-7-row-4')}</li>
                        <li>{translate('coating-7-row-5')}</li>
                    </div>
                    <br />
                    <p>{translate('coating-7-row-6')}</p>
                </div>
                <div className="texture-img img-6"></div>

            </div>

            <div className="coating-row">
                <div className="texture-img img-7"></div>
                <div className="texture-txt">
                    <h5 className="big-text">{translate('coating-8-row-1')}</h5>
                    <p className="sm-text">{translate('coating-2-text')}</p>
                    <div className='list'>
                        <li>{translate('coating-8-row-2')}</li>
                        <li>{translate('coating-8-row-3')}</li>
                        <li>{translate('coating-8-row-4')}</li>
                        <li>{translate('coating-8-row-5')}</li>
                    </div>
                    <br />
                    <p>{translate('coating-8-row-6')}</p>
                </div>
            </div>

            <div className="coating-row">
                <div className="texture-txt">
                    <h5 className="big-text">{translate('coating-9-row-1')}</h5>
                    <br />
                    <p>{translate('coating-9-row-2')}</p>
                    <p>{translate('coating-9-row-3')}</p>
                    <p>{translate('coating-9-row-5')}</p>
                </div>
                <div className="texture-img img-8"></div>

            </div>

        </div>
    )
};


export default function CoatingComp(props) {
    return (
        <Coating></Coating>
    )
};