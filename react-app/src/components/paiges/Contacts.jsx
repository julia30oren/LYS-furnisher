import React from 'react';
import translate from '../../translation/do-translate';
import Form from '../Form';

const ContactUs = (props) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div className="vid-row titles-div">
                <h2 className="_title">{translate('contacts-1-text')}</h2>
            </div>

            <div className="content" style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', marginTop: '5%', marginBottom: '7%' }}>
                    <Form></Form>
                </div>
                <div style={{ width: '50%', marginTop: '5%', marginBottom: '7%', paddingLeft: '10%' }}>
                    <p>{translate('contacts-2-text')}:</p>
                    <p>{translate('contacts-3-text')}</p>
                    <p>{translate('contacts-4-text')}</p>
                    <p>{translate('contacts-5-text')}</p>
                    <p>{translate('contacts-6-text')}</p>
                    <p>{translate('contacts-7-text')}</p>
                    <p>{translate('contacts-8-text')}</p>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;