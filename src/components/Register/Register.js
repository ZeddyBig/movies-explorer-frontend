import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {

    return (
        <section className="register">
            <Link to={"/"} className="register__logo">
                <img src={logo} alt="Логотип" className="register__logo-image"/>
            </Link>
            <h1 className="register__title">
                Добро пожаловать!
            </h1>
            <form className="register__form">
                <div className="register__form-top">
                    <p className="register__name">Имя</p>
                    <input id="register__input" type="text" name="register__input" className="register__input register__input_name" required minLength="2" maxLength="40"/>
                    <span className="register__input-error">Что-то пошло не так...</span>
                    <p className="register__name">E-mail</p>
                    <input type="email" name="register__input" className="register__input register__input_email" required/>
                    <span className="register__input-error">Что-то пошло не так...</span>
                    <p className="register__name">Пароль</p>
                    <input type="password" name="register__input" className="register__input register__input_password" required/>
                    <span className="register__input-error">Что-то пошло не так...</span>
                </div>
                
                <div className="register__form-bottom">
                    <button type="submit" className="register__form-button">
                        Зарегистрироваться
                    </button>
                    <div className="register__signin">
                        <p className="register__signin-text">
                            Уже зарегистрированы?
                        </p>
                        <Link to={"/signin"} className="register__signin-link">Войти</Link>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Register;
