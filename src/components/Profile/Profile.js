import React, { useState, useRef } from "react";
import Header from "../Common/Header/Header";
import { useFormValidation } from '../../utils/useFormValidation';

function Profile(props) {
    let { handleChange, errors, formParams } = useFormValidation();
    const [editMode, setEditMode] = useState(false);
    const nameInput = useRef();
    const emailInput = useRef();
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const errorsList = (errors.name || errors.email || name === "" || email === "");

    function nameChange(e) {
        setName(e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ -]/ig,''));
        handleChange(e);
    }       
    
    function emailChange(e) {
        setEmail(e.target.value);
        handleChange(e);
    }

    function editProfile () {
        setEditMode(true);
        nameInput.current.removeAttribute('disabled');
        emailInput.current.removeAttribute('disabled');
    }

    function saveProfile (evt) {
        evt.preventDefault();
        setEditMode(false);
        props.handleEdit({
            name: nameInput.current.value,
            email: emailInput.current.value,
        });
        nameInput.current.setAttribute("disabled", "");
        emailInput.current.setAttribute("disabled", "");
    }

    return (
        <section className="profile">
            <Header isLoggedIn={props.isLoggedIn}/>
            <div className="profile__content">
                <h1 className="profile__title">
                    Привет, {(formParams.name) || name}!
                </h1>
                <form onSubmit={saveProfile} className="profile__form">
                    <div className="profile__info">
                        <div className="profile__info-block">
                            <p className="profile__info-title">
                                Имя
                            </p>
                            <input 
                                onChange={nameChange}
                                value={(formParams.name) || name}
                                disabled
                                className="profile__info-value"
                                ref={nameInput}
                                type="text" 
                                name="name"
                                required 
                                minLength="1"
                                maxLength="40"
                            />
                        </div>
                        <div className="profile__line"/>
                        <div className="profile__info-block">
                            <p className="profile__info-title">
                                E-mail
                            </p>
                            <input 
                                onChange={emailChange}
                                value={(formParams.email) || email}
                                disabled
                                className="profile__info-value"
                                ref={emailInput}
                                type="email" 
                                name="email"
                                required 
                                minLength="2"
                                maxLength="40"
                            />
                        </div>
                    </div>
                    <div className="profile__submit-block">
                        { errorsList && (
                            <span className={`profile__error-message ${errorsList ? '' : 'profile__disable'}`}>При обновлении профиля произошла ошибка</span>
                        )}                        
                        <button type="submit" disabled={errorsList ? true : false} className={`profile__submit-button ${editMode ? '' : 'profile__disable'}`}>Сохранить</button>
                    </div>
                    <div className={`profile__footer ${editMode ? 'profile__disable' : ''}`}>
                        <button type="button" className="profile__footer-button" onClick={editProfile}>Редактировать</button>
                        <button type="button" onClick={props.handleLogout} className="profile__footer-link">Выйти из аккаунта</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Profile;
