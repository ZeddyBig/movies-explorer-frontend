import React from 'react';

function InfoTooltip(props) {

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <div className={`popup__container popup__container_type_${props.name}`}>
                <div className={`popup__tooltip ${props.success ? "popup__tooltip_success" : "popup__tooltip_error"}`}></div>
                <p className="popup__tooltip-title">{props.message}</p>
                <button onClick={props.onClose} type="button" className="popup__close-button"></button>
            </div>
        </div>
    )
}

export default InfoTooltip;