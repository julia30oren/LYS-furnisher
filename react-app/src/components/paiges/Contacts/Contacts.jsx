import React, { useEffect } from 'react';
import translate from '../../../translation/do-translate';
import Form from '../../Form';
import './Contacts.css';
import './ContactsFit.css';


export const ContactUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Contact-content">

            <div className="contact-div">
                <div style={{ paddingLeft: '10%' }}>
                    <p>{translate('contacts-2-text')}:</p>
                    <p>{translate('contacts-3-text')}</p>
                    <p>{translate('contacts-4-text')}</p>
                    <p>{translate('contacts-5-text')}</p>
                    <p>{translate('contacts-6-text')}</p>
                    <p>{translate('contacts-7-text')}</p>
                    <p>{translate('contacts-8-text')}</p>
                    <p>{translate('contacts-9-text')}</p>
                    <a className="messangers" target="_blank" rel="noopener noreferrer" href="viber://chat?number=%2B380934864811"><i className="fab fa-viber fa-2x" style={{ color: 'rgb(136,77,255)' }}></i></a>
                    <a className="messangers" target="_blank" rel="noopener noreferrer" href="https://t.me/LYS_FAMILY_furniture"><i className="fab fa-telegram fa-2x" style={{ color: 'rgb(25,178,255)' }}></i></a>
                    <a className="messangers" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=380986007136"><i className="fab fa-whatsapp-square fa-2x" style={{ color: 'rgb(0,204,34)' }}></i></a>
                </div>

                <iframe title="googleMap" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.506675436036!2d24.009255315877372!3d49.75772544491529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ1JzI3LjgiTiAyNMKwMDAnNDEuMiJF!5e0!3m2!1sen!2sil!4v1597038061534!5m2!1sen!2sil"
                    style={{
                        border: "0.5px solid black",
                        height: '200px',
                        width: '89%',
                        margin: '3%'
                    }}>
                </iframe>
            </div>

            <div className="form-div">
                <Form prop={props}></Form>
            </div>
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

export default function ContactUsComp() {
    return (
        <ContactUs></ContactUs>
    )
}