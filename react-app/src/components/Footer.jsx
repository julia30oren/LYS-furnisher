import React from 'react';
import translate from '../translation/do-translate';
export default function Footer(props) {

    return (
        <div className="footer">

            <div className="footer-text"
                style={{
                    width: '30%',
                    fontSize: 'large',
                }}>
                <p>{translate('contacts-3-text')}</p>
                <p>{translate('contacts-4-text')}</p>
                <p>{translate('contacts-5-text')}</p>
                <p>{translate('contacts-8-text')}</p>
            </div>


        </div>
    )
}