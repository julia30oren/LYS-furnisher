import React from 'react';
import translate from '../translation/do-translate';

export default function Footer(props) {

    return (
        <div className="footer">

            <div
                style={{
                    width: '42.5%',
                    fontSize: 'large',
                }}>
                <p>{translate('contacts-3-text')}</p>
                <p>{translate('contacts-4-text')}</p>
                <p>{translate('contacts-5-text')}</p>
                <p>{translate('contacts-8-text')}</p>
            </div>

            <div className='logo2'></div>

            <div
                style={{
                    width: '42.5%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <a className="footer-icon" style={{ marginLeft: '35%' }} href="https://www.facebook.com/lys.furniture.ua" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f fa-4x"></i>
                </a>
                <a className="footer-icon" style={{ marginLeft: '5%' }} href="https://www.instagram.com/lys.furniture.ua/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-4x"></i>
                </a>
                <a className="footer-icon" style={{ marginLeft: '5%' }} href="https://www.google.com/maps?ll=49.758776,24.015178&z=15&t=m&hl=en&gl=IL&mapclient=embed&cid=7705576045394627295" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-marker-alt fa-4x"></i>
                </a>

            </div>
        </div>
    )
}