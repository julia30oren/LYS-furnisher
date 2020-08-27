import React, { useEffect } from 'react';
import translate from '../../../translation/do-translate';
import ReactCompareImage from 'react-compare-image';
import './Creation.css';
import scatch from '../../../videos/scatch_fox_2.mp4';
import cr from '../../../videos/cr_fox.mp4';
import work from '../../../videos/work_p_fox.mp4';
import coating from '../../../videos/coating_fox.mp4';
import coating2 from '../../../videos/coating-2-fox.mp4';
import packaging from '../../../videos/packaging_fox.mp4';
import assembling from '../../../videos/assembling_fox.mp4';


export const Creation = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0, { pasive: true });
    }, []);

    return (
        <div className="Creation-component">

            <div className="vid-row" style={{ marginTop: '30px' }}>
                <div className="video-div-left">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={scatch} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h5 className="big-text">{translate('creation-2-title')}</h5>
                    <p>{translate('creation-2-text')}</p>
                </div>
            </div>


            <div className="vid-row">
                <div className="text-bl-right">
                    <h5 style={{ textAlign: 'right' }} className="big-text">{translate('creation-3-title')}</h5>
                    <p>{translate('creation-3-text')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video2" className="videos" autoPlay loop muted>
                        <source src={cr} type="video/mp4" />
                    </video>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="video-div-left">
                    <video id="video3" className="videos" autoPlay loop muted>
                        <source src={work} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h5 className="big-text">{translate('creation-4-title')}</h5>
                    <p>{translate('creation-4-text')}</p>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="text-bl-right">
                    <h5 style={{ textAlign: 'right' }} className="big-text">{translate('creation-5-title')}</h5>
                    <p>{translate('creation-5-text')}</p>
                    <p>{translate('coating-10-row-4')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video4" className="videos" autoPlay loop muted>
                        <source src={coating} type="video/mp4" />
                    </video>
                    <video id="video4-2" className="videos" autoPlay loop muted>
                        <source src={coating2} type="video/mp4" />
                    </video>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="video-div-left">
                    <video id="video5" className="videos" autoPlay loop muted>
                        <source src={packaging} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h5 className="big-text">{translate('creation-6-title')}</h5>
                    <p>{translate('creation-6-text')}</p>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="text-bl-right">
                    <h5 style={{ textAlign: 'right' }} className="big-text">{translate('creation-7-title')}</h5>
                    <p>{translate('creation-7-text')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video6" className="videos" autoPlay loop muted>
                        <source src={assembling} type="video/mp4" />
                    </video>
                </div>
            </div>

            <p className="text-3">{translate('creation-8-text')}</p>
            <RenderImages></RenderImages>
        </div>
    )
}


export const RenderImages = (props) => {
    return (
        <div className="img-row">
            <div className="img-row1">
                <ReactCompareImage
                    leftImage="https://i.pinimg.com/originals/12/06/52/120652ab422a60b3c5514f9b025ea708.jpg"
                    rightImage="https://i.pinimg.com/originals/44/12/7c/44127c305a939e05557fa9df2a9e4907.jpg" />
            </div>

            <div className="img-row2">
                <ReactCompareImage
                    leftImage="https://i.pinimg.com/originals/6b/56/5e/6b565e66adb5d9d56a61200307fa5724.jpg"
                    rightImage="https://i.pinimg.com/originals/74/80/10/7480104cf2ded3ce8d087704dd154eac.jpg" />
            </div>
        </div>
    )
}


export default function CreationComp(props) {

    return (
        <Creation></Creation>
    )
}