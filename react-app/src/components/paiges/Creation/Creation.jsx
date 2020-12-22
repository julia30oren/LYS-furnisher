import React, { useEffect, useState } from 'react';
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
    const [message, setMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0, { pasive: true });
        // changing message to user depending on browser language
        if (navigator.language === 'ru' || navigator.language === 'ru-RU') {
            setMessage('Вы не можете сохранять изображения или видео с этого сайта! Все права на изображения пренадлежать владельцам сайта.');
        } else if (navigator.language === 'uk' || navigator.language === 'uk-UA') {
            setMessage('Ви не можете зберігати зображення або відео з цього сайту! Всі права на зображення належати власникам сайту.');
        } else setMessage('You cannot save images or videos from this site! All rights to images belong to the site owners.');
    }, []);

    return (
        <div className="Creation">
            {/* ----------------------------------------------------------SKETCH------------------ */}
            <div className="left blok-1">
                <video id="video1" autoPlay loop muted onMouseDown={(e) => { e.preventDefault(); alert(message) }}>
                    <source src={sketch_vid} type="video/mp4" />
                </video>
            </div>
            <div className="text-blok right blok-1">
                <h5>{translate('creation-2-title')}</h5>
                <p>{translate('creation-2-text')}</p>
            </div>
            {/* ----------------------------------------------------------DRAWING------------------ */}
            <div className="right blok-2">
                <video id="video2" autoPlay loop muted onMouseDown={(e) => { e.preventDefault(); alert(message) }}>
                    <source src={drawing_vid} type="video/mp4" />
                </video>
            </div>
            <div className="text-blok left blok-2">
                <h5>{translate('creation-3-title')}</h5>
                <p>{translate('creation-3-text')}</p>
            </div>
            {/* ------------------------------------------------------------PRODUCTION------------------ */}
            <div className="left blok-3">
                <video id="video3" autoPlay loop muted onMouseDown={(e) => { e.preventDefault(); alert(message) }}>
                    <source src={production_vid} type="video/mp4" />
                </video>
            </div>
            <div className="text-blok right blok-3">
                <h5>{translate('creation-4-title')}</h5>
                <p>{translate('creation-4-text')}</p>
            </div>
            {/* --------------------------------------------------------------COLORING------------------ */}
            <div className="right  blok-4">
                <video id="video4-1" autoPlay loop muted onMouseDown={(e) => { e.preventDefault(); alert(message) }}>
                    <source src={coloring_vid_1} type="video/mp4" />
                </video>
                <video id="video4-2" autoPlay loop muted onMouseDown={(e) => { e.preventDefault(); alert(message) }}>
                    <source src={coloring_vid_2} type="video/mp4" />
                </video>
            </div>
            <div className="text-blok left  blok-4">
                <h5>{translate('creation-5-title')}</h5>
                <p>{translate('creation-5-text')}</p>
                <p>{translate('coating-10-row-4')}</p>
            </div>
            {/* ------------------------------------------------------------PACKAGING------------------ */}
            <div className="left blok-5">
                <video id="video5" autoPlay loop muted onMouseDown={(e) => { e.preventDefault(); alert(message) }}>
                    <source src={packaging_vid} type="video/mp4" />
                </video>
            </div>
            <div className="text-blok right blok-5">
                <h5>{translate('creation-6-title')}</h5>
                <p>{translate('creation-6-text')}</p>
            </div>
            {/* -----------------------------------------------------DELIVERY AND INSTALLATION------------------ */}
            <div className="right blok-6">
                <video id="video6" autoPlay loop muted onMouseDown={(e) => { e.preventDefault(); alert(message) }}>
                    <source src={installation_vid} type="video/mp4" />
                </video>
            </div>
            <div className="text-blok left blok-6">
                <h5>{translate('creation-7-title')}</h5>
                <p>{translate('creation-7-text')}</p>
            </div>
            {/* ----------------------------------------------------------------LOZUNG------------------ */}
            <p className="creation-lozung">{translate('creation-8-text')}</p>
            {/* ----------------------------------------------------------COMPARING IMAGES------------------ */}
            <RenderImages1></RenderImages1>
            <RenderImages2></RenderImages2>

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
//  -------------------------------------------------------------COMPARING IMAGES------------------ 
// -------------------------------------------------FIRST ROW------------------ 
export const RenderImages1 = (props) => {

    return (
        <div className="comparing-row-1">
            <div className="img-row1" id="bench">
                <ReactCompareImage
                    leftImage="https://i.pinimg.com/originals/12/06/52/120652ab422a60b3c5514f9b025ea708.jpg"
                    rightImage="https://i.pinimg.com/originals/44/12/7c/44127c305a939e05557fa9df2a9e4907.jpg" />
            </div>

            <div className="img-row2" id="chair">
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
        <div className="comparing-row-2">

            <div className="img-row1" id="cupboard">
                <ReactCompareImage
                    leftImage="https://i.pinimg.com/originals/c6/16/04/c61604b59e1ae8e47014ea3d52ca907b.jpg"
                    rightImage="https://i.pinimg.com/originals/71/0a/54/710a54c243af44e489f2115d517a74bb.jpg"
                />
            </div>
            <div className="img-row2" id="woolf">
                <ReactCompareImage
                    leftImage="https://i.pinimg.com/originals/51/71/52/517152d09e1f87f4c78cf50ba41c8731.jpg"
                    rightImage="https://i.pinimg.com/originals/59/33/fb/5933fb81804d1eb8ad085c0b84210735.jpg"
                />
            </div>


        </div>
    )
}


export default function CreationComp(props) {
    return (
        <Creation></Creation>
    )
}