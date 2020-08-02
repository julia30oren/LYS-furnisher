import React from 'react';

export default function Footer(props) {

    return (

        <div className="footer">
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