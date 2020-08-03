import React from 'react';
import translate from '../translation/do-translate';

export default function Form() {
    return (
        <div style={{
            position: 'absolute',
            right: '1%',
            bottom: '120px',
            width: '300px',
            backgroundColor: 'white',
            border: 'solid 1px black',
            padding: '10%',
        }}>
            <form>
                <div className="form-group">
                    <label for="nameInput">{translate('form-1-t')}</label>
                    <input type="text" className="form-control" id="nameInput" />
                </div>
                <div className="form-group">
                    <label for="emailInput">{translate('form-2-t')}</label>
                    <input type="email" className="form-control" id="emailInput" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">{translate('form-3-t')}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn" type="button">{translate('form-4-button')} <i className="fas fa-paper-plane"></i></button>
                </div>
            </form>
        </div>
    )
}