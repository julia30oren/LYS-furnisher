import React, { useState } from 'react';
import translate from '../../translation/do-translate';

import scatch from '../../videos/scatch_fox_2.mp4';
import cr from '../../videos/cr_fox.mp4';
import work from '../../videos/work_p_fox.mp4';
import coating from '../../videos/coating_fox.mp4';
import packaging from '../../videos/packaging_fox.mp4';
import assembling from '../../videos/assembling_fox.mp4';



export default function Creation(props) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div className="vid-row">
                <h2 style={{ width: '100%', textAlign: 'center' }}>{translate('creation-1-text')}</h2>
            </div>

            {/* <div class="vl"></div> */}
            <br />

            <div className="vid-row">
                <div className="video-div-left">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={scatch} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h3 style={{ fontFamily: 'Comic Sans MS' }}>{translate('creation-2-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-2-text')}</p>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="text-bl-right">
                    <h3 style={{ fontFamily: 'Comic Sans MS', textAlign: 'right' }}>{translate('creation-3-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-3-text')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={cr} type="video/mp4" />
                    </video>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="video-div-left">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={work} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h3 style={{ fontFamily: 'Comic Sans MS' }}>{translate('creation-4-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-4-text')}</p>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="text-bl-right">
                    <h3 style={{ fontFamily: 'Comic Sans MS', textAlign: 'right' }}>{translate('creation-5-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-5-text')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={coating} type="video/mp4" />
                    </video>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="video-div-left">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={packaging} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h3 style={{ fontFamily: 'Comic Sans MS' }}>{translate('creation-6-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-6-text')}</p>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="text-bl-right">
                    <h3 style={{ fontFamily: 'Comic Sans MS', textAlign: 'right' }}>{translate('creation-7-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-7-text')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={assembling} type="video/mp4" />
                    </video>
                </div>
            </div>

            <br />

            <div><h3 style={{ textAlign: 'center' }}>{translate('creation-8-text')}</h3></div>

            {/* <button>click on me</button> <p>{clicState}</p> */}
        </div>
    )
}