import React, { useEffect, useState } from 'react';
import translate from '../../../translation/do-translate';
import './Coating.css';

export const Coating = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [bigPicture, setBigPicture] = useState(null);

    return (
        <div>
            {bigPicture ?
                // ----------------------------------------------2 BIG TEXTURE OPEN----------------------------------
                <div className="black-background">
                    <div className="texture-open">
                        <img src={bigPicture.img_1} alt="texture1" />
                        <img src={bigPicture.img_2} alt="texture2" />
                        <button type="button" onClick={() => setBigPicture(null)}>
                            <i className="fas fa-times fa-2x"></i>
                        </button>
                    </div>
                </div> :
                // ----------------------------------------------2 BIG TEXTURE CLOSED----------------------------------
                // ------------------------------------------------------MAIN----------------------------------
                <div className="Coating">
                    {/* ------------------------------------Toning------------------------------------------------ */}
                    <div className="coating-row">
                        <div className="texture-img img-1"
                            onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/73/ef/94/73ef9427c4d1079538af3cb868937107.jpg", img_2: "https://i.pinimg.com/originals/0b/67/ca/0b67ca6ce53a80d432a173a3a14bf9ad.jpg" })}>
                        </div>
                        <div className="texture-txt">
                            <h5>{translate('coating-2-row-1')}</h5>
                            <p>{translate('coating-2-text')}</p>
                            <li>{translate('coating-2-row-2')}</li>
                            <li>{translate('coating-2-row-3')}</li>
                            <h6>{translate('coating-2-row-4')}</h6>
                        </div>
                    </div>
                    {/* ---------------------------------Painting with enamels------------------------------------------------ */}
                    <div className="coating-row">
                        <div className="texture-txt">
                            <h5>{translate('coating-3-row-1')}</h5>
                            <p>{translate('coating-2-text')}</p>
                            <li>{translate('coating-3-row-2')}</li>
                            <li>{translate('coating-3-row-3')}</li>
                            <h6>{translate('coating-3-row-4')}</h6>
                        </div>
                        <div className="texture-img img-2"
                            onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/af/ac/43/afac43761d97d62cb0ff3572f36b8fc7.jpg", img_2: "https://i.pinimg.com/originals/7f/bc/e1/7fbce1497719dbc2861436463cb7edff.jpg" })}>
                        </div>
                    </div>
                    {/* ---------------------------------Oil coating------------------------------------------------ */}
                    <div className="coating-row">
                        <div className="texture-img img-3"
                            onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/93/0d/f2/930df29396a511381a1f56a520c5a3ea.jpg", img_2: "https://i.pinimg.com/originals/64/b2/59/64b25972c870383a1e7d510819abfc63.jpg" })}>
                        </div>
                        <div className="texture-txt">
                            <h5>{translate('coating-4-row-1')}</h5>
                            <p>{translate('coating-2-text')}</p>
                            <li>{translate('coating-4-row-2')}</li>
                            <li>{translate('coating-4-row-3')}</li>
                            <h6>{translate('coating-4-row-4')}</h6>
                        </div>
                    </div>
                    {/* ------------------------------Toning with the effect of aging------------------------------------------------ */}
                    <div className="coating-row">
                        <div className="texture-txt">
                            <h5>{translate('coating-5-row-1')}</h5>
                            <p>{translate('coating-2-text')}</p>
                            <li>{translate('coating-5-row-2')}</li>
                            <li>{translate('coating-5-row-3')}</li>
                            <li>{translate('coating-5-row-4')}</li>
                            <h6>{translate('coating-5-row-5')}</h6>
                        </div>
                        <div className="texture-img img-4"
                            onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/03/e2/d6/03e2d6db4959d9c831b089211410cc0e.jpg", img_2: "https://i.pinimg.com/originals/b4/d4/1d/b4d41d9ba6b2bb99f497962702aaad09.jpg" })}>
                        </div>
                    </div>
                    {/* ------------------------------Painting with the effect of antiquity------------------------------------------------ */}
                    <div className="coating-row">
                        <div className="texture-img img-5"
                            onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/c2/9e/94/c29e949764a48b945ce4839396509997.jpg", img_2: "https://i.pinimg.com/originals/f2/71/df/f271dfea9a4de7c46c006063a9bca755.jpg" })}>
                        </div>
                        <div className="texture-txt">
                            <h5>{translate('coating-6-row-1')}</h5>
                            <p>{translate('coating-2-text')}</p>
                            <li>{translate('coating-6-row-2')}</li>
                            <li>{translate('coating-6-row-3')}</li>
                            <li>{translate('coating-6-row-4')}</li>
                            <li>{translate('coating-6-row-5')}</li>
                            <h6>{translate('coating-6-row-6')}</h6>
                        </div>
                    </div>
                    {/* -------------------------------------------------texture  «flax»------------------------------------------------ */}
                    <div className="coating-row">
                        <div className="texture-txt">
                            <h5>{translate('coating-7-row-1')}</h5>
                            <p>{translate('coating-2-text')}</p>
                            <li>{translate('coating-7-row-2')}</li>
                            <li>{translate('coating-7-row-3')}</li>
                            <li>{translate('coating-7-row-4')}</li>
                            <li>{translate('coating-7-row-5')}</li>
                            <h6>{translate('coating-7-row-6')}</h6>
                        </div>
                        <div className="texture-img img-6"
                            onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/dd/b4/e2/ddb4e24cc691b2a712f52e9cc2293acf.jpg", img_2: "https://i.pinimg.com/originals/86/f5/aa/86f5aa8da14cee36434498903d4a7f39.jpg" })}>
                        </div>
                    </div>
                    {/* -------------------------------------------------texture «brush»------------------------------------------------ */}
                    <div className="coating-row">
                        <div className="texture-img img-7"
                            onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/originals/49/a1/e2/49a1e23f89a1f2e22682d90d4107beab.jpg", img_2: "https://i.pinimg.com/originals/14/bc/d2/14bcd2f3bf5a7f9ff4abd22d8e65ca9f.jpg" })}>
                        </div>
                        <div className="texture-txt">
                            <h5>{translate('coating-8-row-1')}</h5>
                            <p>{translate('coating-2-text')}</p>
                            <li>{translate('coating-8-row-2')}</li>
                            <li>{translate('coating-8-row-3')}</li>
                            <li>{translate('coating-8-row-4')}</li>
                            <li>{translate('coating-8-row-5')}</li>
                            <h6>{translate('coating-8-row-6')}</h6>
                        </div>
                    </div>
                    {/* -----------------------------------------------Brushing------------------------------------------ */}
                    <div className="coating-row">
                        <div className="texture-txt">
                            <h5>{translate('coating-9-row-1')}</h5>
                            <h6>{translate('coating-9-row-2')}</h6>
                            <h6>{translate('coating-9-row-3')}</h6>
                            <h6>{translate('coating-9-row-5')}</h6>
                        </div>
                        <div className="texture-img img-8"
                            onClick={() => setBigPicture({ img_1: "https://i.pinimg.com/564x/40/b6/f5/40b6f52f735ed818ee187f6a01404224.jpg", img_2: "https://i.pinimg.com/originals/39/60/01/3960010461dca1592be6a3f0db67fdcd.jpg" })}>
                        </div>
                    </div>
                    {/* -------------------------- */}
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