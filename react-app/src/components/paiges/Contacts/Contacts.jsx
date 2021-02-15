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
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-12 order-2 order-lg-1">
                    <Form prop={props}></Form>
                </div>
                <div className="col-lg-5 col-10 order-1 order-lg-2 contact-div">

                    <div style={{ paddingLeft: '10%' }}>
                        <p>{translate('contacts-2-text')}:</p>
                        <p>{translate('contacts-3-text')}</p>
                        <p>{translate('contacts-4-text')}</p>
                        <p>{translate('contacts-5-text')}</p>
                        <p>{translate('contacts-6-text')}</p>
                        <p>{translate('contacts-7-text')}</p>
                        <p>{translate('contacts-8-text')}</p>
                        <p>{translate('contacts-9-text')}</p>
                        <br />
                        <a className="messangers" target="_blank" rel="noopener noreferrer" href="viber://chat?number=%2B380934864811"><i className="fab fa-viber fa-2x" style={{ color: 'rgb(136,77,255)' }}></i></a>
                        <a className="messangers" target="_blank" rel="noopener noreferrer" href="https://t.me/LYS_FAMILY_furniture"><i className="fab fa-telegram fa-2x" style={{ color: 'rgb(51,153,255)' }}></i></a>
                        <a className="messangers" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=380986007136"><i className="fab fa-whatsapp-square fa-2x" style={{ color: 'rgb(0,153,25)' }}></i></a>
                    </div>
                    <br />
                    <iframe title="googleMap" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.506675436036!2d24.009255315877372!3d49.75772544491529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ1JzI3LjgiTiAyNMKwMDAnNDEuMiJF!5e0!3m2!1sen!2sil!4v1597038061534!5m2!1sen!2sil"
                        style={{
                            border: "0.5px solid black",
                            height: '300px',
                            width: '94%',
                            margin: '3%'
                        }}>
                    </iframe>
                </div>

            </div>
            {/* ------------------FOOTER----------------- */}

            <div className="footer">
                <div className="icons">
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

                <div className="creators">This site was designed and created by
                    <a href="https://www.linkedin.com/in/julia-orendovskyi-026a30b6/">Julia Oren</a> &
                    <a href="https://www.linkedin.com/in/iyar-nitzan-576184110/"> Iyar Nitzan</a>
                </div>
            </div>


            {/* ----------------- */}
        </div>
    )
}

export default function ContactUsComp() {
    return (
        <ContactUs></ContactUs>
    )
}