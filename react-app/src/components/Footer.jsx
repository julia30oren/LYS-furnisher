import React from 'react';
import pictcher1 from '../pic/IMG_4108.jpg';
import pictcher2 from '../pic/IMG_52508.jpg';
import pictcher3 from '../pic/IMG_3245.jpg';


export default function Footer(props) {

    return (

        <div className="HomeLast" style={{
            backgroundColor: 'rgb(255, 166, 0)',
            width: '100%',
            padding: '1%',
            paddingLeft: '5%',
            paddingRight: '5%'
        }}>
            <div
                style={{
                    width: '42.5%',
                    fontSize: 'large',
                }}><p>Lviv<br />..........<br />........<br />+380 98 600 71 36</p></div>
            <div className='logo2'
                style={{
                    width: '15%'
                }}></div>
            <div
                style={{
                    width: '42.5%',
                    paddingLeft: '35%'
                }}>
                <a style={{ color: 'black' }} href="https://www.facebook.com/lys.furniture.ua"><i className="fab fa-facebook-f fa-2x"></i></a>
                <a style={{ color: 'black', marginLeft: '5%' }} href="https://www.instagram.com/lys.furniture.ua/"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
        </div>
    )
}