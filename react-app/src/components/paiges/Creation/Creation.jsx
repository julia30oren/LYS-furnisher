import React, { useEffect } from 'react';
import translate from '../../../translation/do-translate';
import ReactCompareImage from 'react-compare-image';
import './Creation.css';
import './CreationFit.css';

import sketch_vid from '../../../videos/scatch_fox_2.mp4';
import drawing_vid from '../../../videos/cr_fox.mp4';
import production_vid from '../../../videos/work_p_fox.mp4';
import coloring_vid_1 from '../../../videos/coating_fox.mp4';
import coloring_vid_2 from '../../../videos/coating-2-fox.mp4';
import packaging_vid from '../../../videos/packaging_fox.mp4';
import installation_vid from '../../../videos/assembling_fox.mp4';


export const Creation = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0, { pasive: true });
    }, []);

    return (
        <div className="column Creation">
            {/* ----------------------------------------------------------SKETCH------------------ */}
            <div className="creation-row">
                <div className="video-left-side">
                    <video id="video1" autoPlay loop muted>
                        <source src={sketch_vid} type="video/mp4" />
                    </video>
                    <div className="vid-cover"></div>
                </div>
                <div className="text-blok right">
                    <h5>{translate('creation-2-title')}</h5>
                    <p>{translate('creation-2-text')}</p>
                </div>
            </div>
            {/* ----------------------------------------------------------DRAWING------------------ */}
            <div className="creation-row">
                <div className="text-blok left">
                    <h5>{translate('creation-3-title')}</h5>
                    <p>{translate('creation-3-text')}</p>
                </div>
                <div className="video-right-side">
                    <video id="video2" autoPlay loop muted>
                        <source src={drawing_vid} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* ------------------------------------------------------------PRODUCTION------------------ */}
            <div className="creation-row">
                <div className="video-left-side">
                    <video id="video3" autoPlay loop muted>
                        <source src={production_vid} type="video/mp4" />
                    </video>
                </div>
                <div className="text-blok right">
                    <h5>{translate('creation-4-title')}</h5>
                    <p>{translate('creation-4-text')}</p>
                </div>
            </div>
            {/* --------------------------------------------------------------COLORING------------------ */}
            <div className="creation-row vid-2">
                <div className="text-blok left">
                    <h5>{translate('creation-5-title')}</h5>
                    <p>{translate('creation-5-text')}</p>
                    <p>{translate('coating-10-row-4')}</p>
                </div>
                <div className="video-right-side">
                    <video id="video4-1" autoPlay loop muted>
                        <source src={coloring_vid_1} type="video/mp4" />
                    </video>
                    <video id="video4-2" autoPlay loop muted>
                        <source src={coloring_vid_2} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* ------------------------------------------------------------PACKAGING------------------ */}
            <div className="creation-row">
                <div className="video-left-side">
                    <video id="video5" autoPlay loop muted>
                        <source src={packaging_vid} type="video/mp4" />
                    </video>
                </div>
                <div className="text-blok right">
                    <h5>{translate('creation-6-title')}</h5>
                    <p>{translate('creation-6-text')}</p>
                </div>
            </div>
            {/* -----------------------------------------------------DELIVERY AND INSTALLATION------------------ */}
            <div className="creation-row">
                <div className="text-blok left">
                    <h5>{translate('creation-7-title')}</h5>
                    <p>{translate('creation-7-text')}</p>
                </div>
                <div className="video-right-side">
                    <video id="video6" autoPlay loop muted>
                        <source src={installation_vid} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* ----------------------------------------------------------------LOZUNG------------------ */}
            <p className="creation-lozung">{translate('creation-8-text')}</p>
            {/* ----------------------------------------------------------COMPARING IMAGES------------------ */}
            <RenderImages1></RenderImages1>
            <RenderImages2></RenderImages2>
        </div>
    )
}
//  -------------------------------------------------------------COMPARING IMAGES------------------ 
// -------------------------------------------------FIRST ROW------------------ 
export const RenderImages1 = (props) => {

    return (
        <div className="comparing-row">
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
//  -------------------------------------------------SECOND ROW------------------
export const RenderImages2 = (props) => {
    return (
        <div className="comparing-row">
            <div className="img-row2">
                <ReactCompareImage
                    leftImage="https://i.pinimg.com/originals/c6/16/04/c61604b59e1ae8e47014ea3d52ca907b.jpg"
                    rightImage="https://i.pinimg.com/originals/71/0a/54/710a54c243af44e489f2115d517a74bb.jpg" />
            </div>

            <div className="img-row1">
                <ReactCompareImage
                    leftImage="https://i.pinimg.com/originals/51/71/52/517152d09e1f87f4c78cf50ba41c8731.jpg"
                    rightImage="https://i.pinimg.com/originals/59/33/fb/5933fb81804d1eb8ad085c0b84210735.jpg" />
            </div>
        </div>
    )
}


export default function CreationComp(props) {
    return (
        <Creation></Creation>
    )
}