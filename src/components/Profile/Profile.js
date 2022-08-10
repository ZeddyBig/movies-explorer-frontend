import React, { useState, useRef } from "react";
import Header from "../Common/Header/Header";
import { Link } from 'react-router-dom';

function Profile(props) {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('Виталий');
    const [email, setEmail] = useState('pochta@yandex.ru');
    const nameInput = useRef();
    const emailInput = useRef();
    const errorMessage = false;

    function nameChange(e) {
        setName(e.target.value)
    }       
    
    function emailChange(e) {
        setEmail(e.target.value)
    }

    function editProfile () {
        setEditMode(true);
        nameInput.current.removeAttribute('disabled');
        emailInput.current.removeAttribute('disabled');
    }

    function saveProfile (evt) {
        evt.preventDefault();
        setEditMode(false);
        nameInput.current.disabled = false;
        emailInput.current.disabled = false;
    }

    return (
        <section className="profile">
            <Header isLoggedIn={props.isLoggedIn}/>
            <div className="profile__content">
                <h1 className="profile__title">
                    Привет, {name}!
                </h1>
                <form onSubmit={saveProfile} className="profile__form">
                    <div className="profile__info">
                        <div className="profile__info-block">
                            <p className="profile__info-title">
                                Имя
                            </p>
                            <input onChange={nameChange} value={name} disabled className="profile__info-value" ref={nameInput}/>
                        </div>
                        <div className="profile__line"/>
                        <div className="profile__info-block">
                            <p className="profile__info-title">
                                E-mail
                            </p>
                            <input onChange={emailChange} value={email} disabled className="profile__info-value" ref={emailInput}/>
                        </div>
                    </div>
                    <div className="profile__submit-block">
                        <span className={`profile__error-message ${errorMessage ? '' : 'profile__disable'}`}>При обновлении профиля произошла ошибка</span>
                        <button type="submit" className={`profile__submit-button ${editMode ? '' : 'profile__disable'}`}>Сохранить</button>
                    </div>
                    <div className={`profile__footer ${editMode ? 'profile__disable' : ''}`}>
                        <button className="profile__footer-button" type="button" onClick={editProfile}>Редактировать</button>
                        <Link to='/' className="profile__footer-link">Выйти из аккаунта</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Profile;
