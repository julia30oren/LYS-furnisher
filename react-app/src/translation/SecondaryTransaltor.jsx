import React from 'react';
import { injectIntl } from "react-intl";

const Input = (props) => {
    const { formatMessage } = props.intl;
    return (
        (<props.element
            name={props.name}
            type={props.type}
            className={props.className}
            onFocus={props.onFocus}
            ref={props.reference}
            // type={props.text}             ref={props.nameInput}
            placeholder={formatMessage({ id: props.translatedIdTarget })} />)
    )

}

const TextArea = (props) => {
    // const { formatMessage } = props.intl;
    return (

        (<props.element className={props.className} style={props.style} rows={props.rows} cols={props.cols} name={props.name} ref={props.reference} onFocus={props.onFocus} />)
    )
}
const AlertMessage = (props) => {
    const { formatMessage } = props.intl;
    return (

        formatMessage({ id: props.translatedIdTarget })
    )
}


export const TranslatedInput = injectIntl(Input)
export const TranslatedMessageArea = injectIntl(TextArea)
export const AlertMessagePop = injectIntl(AlertMessage)

