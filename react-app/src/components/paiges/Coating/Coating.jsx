import React, { useEffect, useState } from 'react';
import translate from '../../../translation/do-translate';
import './Coating.css';
import './CoatingFit.css';


export const Coating = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [bigPicture, setBigPicture] = useState(null);

    return (
        <div>
            {bigPicture ?
                // ----------------------------------------------2 BIG TEXTURE OPEN----------------------------------
                <div className="black-background" onClick={() => setBigPicture(null)}>
                    <div className="texture-open">
                        <img src={bigPicture.img_1} alt="LYS texture" className="texture" onMouseDown={(e) => { e.preventDefault(); setBigPicture(null) }} />
                        <img src={bigPicture.img_2} alt="LYS texture" className="photo" onMouseDown={(e) => { e.preventDefault(); setBigPicture(null) }} />
                    </div>
                </div> :
                // ----------------------------------------------2 BIG TEXTURE CLOSED----------------------------------
                // ------------------------------------------------------MAIN----------------------------------
                <div className="Coating">
                    <div className="container-fluid">
                        {/* ------------------------------------Toning------------------------------------------------ */}
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-10 order-2 order-lg-1">
                                <div className="texture-img img-1"
                                    onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/73/ef/94/73ef9427c4d1079538af3cb868937107.jpg", img_2: "https://i.pinimg.com/originals/0b/67/ca/0b67ca6ce53a80d432a173a3a14bf9ad.jpg" })}>
                                    <small>{translate('coating-2-row-1')}</small>
                                </div>
                            </div>
                            <div className="texture-txt col-lg-8 col-12 order-1 order-lg-2">
                                <h4>{translate('coating-2-row-1')}</h4>
                                <h6>{translate('coating-2-text')}</h6>
                                <li>{translate('coating-2-row-2')}</li>
                                <li>{translate('coating-2-row-3')}</li>
                                <br></br>
                                <p>{translate('coating-2-row-4')}</p>
                            </div>
                        </div>
                        {/* ---------------------------------Painting with enamels------------------------------------------------ */}
                        <div className="row justify-content-center">
                            <div className="texture-txt col-lg-8 col-12">
                                <h4>{translate('coating-3-row-1')}</h4>
                                <h6>{translate('coating-2-text')}</h6>
                                <li>{translate('coating-3-row-2')}</li>
                                <li>{translate('coating-3-row-3')}</li>
                                <li>{translate('coating-3-row-4')}</li>
                                <br></br>
                                <p>{translate('coating-3-row-5')}</p>
                            </div>
                            <div className="col-lg-4 col-10">
                                <div className="texture-img img-2"
                                    onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/af/ac/43/afac43761d97d62cb0ff3572f36b8fc7.jpg", img_2: "https://i.pinimg.com/originals/a4/43/1d/a4431d553a858a36f820c9adf27ae2ac.jpg" })}>
                                    <small>{translate('coating-3-row-1')}</small>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------Oil coating------------------------------------------------ */}
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-10 order-2 order-lg-1">
                                <div className="texture-img img-3"
                                    onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/93/0d/f2/930df29396a511381a1f56a520c5a3ea.jpg", img_2: "https://i.pinimg.com/originals/8a/29/e9/8a29e9b602946c9a0ee09b64268bcdb0.jpg" })}>
                                    <small>{translate('coating-4-row-1')}</small>
                                </div>
                            </div>
                            <div className="texture-txt col-lg-8 col-12 order-1 order-lg-2">
                                <h4>{translate('coating-4-row-1')}</h4>
                                <h6>{translate('coating-2-text')}</h6>
                                <li>{translate('coating-4-row-2')}</li>
                                <li>{translate('coating-4-row-3')}</li>
                                <br></br>
                                <p>{translate('coating-4-row-4')}</p>
                            </div>
                        </div>
                        {/* ------------------------------Toning with the effect of aging------------------------------------------------ */}
                        <div className="row justify-content-center">
                            <div className="texture-txt col-lg-8 col-12">
                                <h4>{translate('coating-5-row-1')}</h4>
                                <h6>{translate('coating-2-text')}</h6>
                                <li>{translate('coating-5-row-2')}</li>
                                <li>{translate('coating-5-row-3')}</li>
                                <li>{translate('coating-5-row-4')}</li>
                                <br></br>
                                <p>{translate('coating-5-row-5')}</p>
                            </div>
                            <div className="col-lg-4 col-10">
                                <div className="texture-img img-4"
                                    onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/03/e2/d6/03e2d6db4959d9c831b089211410cc0e.jpg", img_2: "https://i.pinimg.com/originals/83/93/21/8393219bcd1ead2845dc2b5241ce951d.jpg" })}>
                                    <small>{translate('coating-5-row-1')}</small>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------Painting with the effect of antiquity------------------------------------------------ */}
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-10 order-2 order-lg-1">
                                <div className="texture-img img-5"
                                    onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/c2/9e/94/c29e949764a48b945ce4839396509997.jpg", img_2: "https://i.pinimg.com/originals/dc/03/56/dc03567ca453ea2dbca3bd98fcc18ea0.jpg" })}>
                                    <small>{translate('coating-6-row-1')}</small>
                                </div>
                            </div>
                            <div className="texture-txt col-lg-8 col-12 order-1 order-lg-2">
                                <h4>{translate('coating-6-row-1')}</h4>
                                <h6>{translate('coating-2-text')}</h6>
                                <li>{translate('coating-6-row-2')}</li>
                                <li>{translate('coating-6-row-3')}</li>
                                <li>{translate('coating-6-row-4')}</li>
                                <li>{translate('coating-6-row-5')}</li>
                                <br></br>
                                <p>{translate('coating-6-row-6')}</p>
                            </div>
                        </div>
                        {/* -------------------------------------------------texture  «flax»------------------------------------------------ */}
                        <div className="row justify-content-center">
                            <div className="texture-txt col-lg-8 col-12">
                                <h4>{translate('coating-7-row-1')}</h4>
                                <h6>{translate('coating-2-text')}</h6>
                                <li>{translate('coating-7-row-2')}</li>
                                <li>{translate('coating-7-row-3')}</li>
                                <li>{translate('coating-7-row-4')}</li>
                                <li>{translate('coating-7-row-5')}</li>
                                <br></br>
                                <p>{translate('coating-7-row-6')}</p>
                            </div>
                            <div className="col-lg-4 col-10">
                                <div className="texture-img img-6"
                                    onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/dd/b4/e2/ddb4e24cc691b2a712f52e9cc2293acf.jpg", img_2: "https://i.pinimg.com/564x/d9/82/84/d98284e086b1b46eb25e29000512d235.jpg" })}>
                                    <small>{translate('coating-7-row-1')}</small>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------------------------------texture «brush»------------------------------------------------ */}
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-10 order-2 order-lg-1">
                                <div className="texture-img img-7"
                                    onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/49/a1/e2/49a1e23f89a1f2e22682d90d4107beab.jpg", img_2: "https://i.pinimg.com/originals/14/bc/d2/14bcd2f3bf5a7f9ff4abd22d8e65ca9f.jpg" })}>
                                    <small>{translate('coating-8-row-1')}</small>
                                </div>
                            </div>
                            <div className="texture-txt col-lg-8 col-12 order-1 order-lg-2">
                                <h4>{translate('coating-8-row-1')}</h4>
                                <h6>{translate('coating-2-text')}</h6>
                                <li>{translate('coating-8-row-2')}</li>
                                <li>{translate('coating-8-row-3')}</li>
                                <li>{translate('coating-8-row-4')}</li>
                                <li>{translate('coating-8-row-5')}</li>
                                <br></br>
                                <p>{translate('coating-8-row-6')}</p>
                            </div>
                        </div>
                        {/* -----------------------------------------------Brushing------------------------------------------ */}
                        <div className="row justify-content-center">
                            <div className="texture-txt col-lg-8 col-12">
                                <h4>{translate('coating-9-row-1')}</h4>
                                <br></br>
                                <p>{translate('coating-9-row-2')}</p>
                                <p>{translate('coating-9-row-3')}</p>
                                <p>{translate('coating-9-row-5')}</p>
                            </div>
                            <div className="col-lg-4 col-10">
                                <div className="texture-img img-8"
                                    onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/564x/40/b6/f5/40b6f52f735ed818ee187f6a01404224.jpg", img_2: "https://i.pinimg.com/originals/39/60/01/3960010461dca1592be6a3f0db67fdcd.jpg" })}>
                                    <small>{translate('coating-9-row-1')}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------- */}
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
                    <a href="https://www.linkedin.com/in/iyar-nitzan-576184110/">Iyar Nitzan</a>
                        </div>
                    </div>
                    {/* ----------------- */}
                </div>
            }
        </div>


    )
};


export default function CoatingComp(props) {
    return (
        <Coating></Coating>
    )
};