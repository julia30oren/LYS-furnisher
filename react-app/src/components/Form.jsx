import React from 'react';
import axios from 'axios';
import translate from '../translation/do-translate';

export default function Form() {

    ////////Functions////////////
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const phoneInput = React.createRef();
    // const subjectInput = React.createRef();
    const textInput = React.createRef();

    const sendEmail = async () => {
        // console.log(nameInput.current.value, emailInput.current.value, phoneInput.current.value, textInput.current.value)
        if (!nameInput.current.value | !emailInput.current.value | !phoneInput.current.value | !textInput.current.value) {
            alert("You have not filled all necessary fields")
            return
        }
        try {
            const url = `http://localhost:4567/contact`
            const result = await axios.post(url, { name: nameInput.current.value, email: emailInput.current.value, phone: phoneInput.current.value, text: textInput.current.value }, { headers: { "Content-Type": "application/json" } })
            if (result.data.message === "Email Sent") {
                alert(result.data.message)
                nameInput.current.value = ""
                emailInput.current.value = ""
                phoneInput.current.value = ""
                // subjectInput.current.value = ""
                textInput.current.value = ""
            }
            else {
                alert("Something Went Wrong.Please Try Again Later")
            }
        }
        catch (error) {
            console.error("catch", error);
        }
    }

    return (
        <form>
            <div className="form-group">
                <label>{translate("contact-page-name-label")}</label>
                <input type="text" className="form-control" ref={nameInput} />
            </div>
            <div className="form-group">
                <label>{translate("contact-page-email-label")}</label>
                <input type="email" className="form-control" ref={emailInput} />
            </div>
            <div className="form-group">
                <label>{translate("contact-page-phone-label")}</label>
                <input type="text" className="form-control" ref={phoneInput} />
            </div>
            {/* <div className="form-group">
                    <label>{translate("contact-page-subject-label")}</label>
                    <select className="form-control" ref={subjectInput}>
                        <option>{translate('contact-page-subject-option-1'}</option>
                        <option>{translate('contact-page-subject-option-2'}</option>
                        <option>{translate('contact-page-subject-option-3'}</option>
                        <option>{translate('contact-page-subject-option-4'}</option>
                        <option>{translate('contact-page-subject-option-5'}</option>
                    </select>
                </div> */}
            <div className="form-group">
                <label>{translate("contact-page-message-label")}</label>
                <textarea className="form-control" style={{ resize: "none" }} autoFocus={true} rows="5" cols="50" ref={textInput} />
            </div>
            <div className="form-group">
                <button className="btn" type="button" onClick={sendEmail}>{translate('contact-page-button-text')}
                    <i className="fas fa-external-link-alt" style={{ marginLeft: '15px' }}></i>
                </button>
            </div>
        </form>
    )
}