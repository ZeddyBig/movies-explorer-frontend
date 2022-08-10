import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    state = {
        fields: {},
        fieldErrors: {}
    };
    
    handleSubmit = evt => {
        evt.preventDefault();
    };

    handleChange = evt => {
        const fieldErrors = {
          ...this.state.fieldErrors,
          [evt.target.name]: ""
        };
    
        this.setState({ fieldErrors });
    };

    handleInvalid = evt => {
        evt.preventDefault();
        const fieldErrors = {
          ...this.state.fieldErrors,
          [evt.target.name]: evt.target.validationMessage,
        };
    
        this.setState({ fieldErrors });
    };

    render() {
        const { fieldErrors } = this.state;
        return (
            <section className="register">
                <Link to={"/"} className="register__logo">
                    <img src={logo} alt="Логотип" className="register__logo-image"/>
                </Link>
                <h1 className="register__title">
                    Добро пожаловать!
                </h1>
                <form className="register__form"
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    onInvalid={this.handleInvalid}
                >
                    <div className="register__form-top">
                        <p className="register__name">Имя</p>
                        <input 
                            className={`register__input register__input_name ${fieldErrors.username ? "register__input_error-switch" : ""}`}
                            type="text" 
                            name="username"
                            required 
                            minLength="2" 
                            maxLength="40"
                        />
                        { fieldErrors.username && (
                            <span className="register__input-error">{fieldErrors.username}</span>
                        )}
                        <p className="register__name">E-mail</p>
                        <input 
                            className={`register__input register__input_email ${fieldErrors.email ? "register__input_error-switch" : ""}`}
                            type="email" 
                            name="email"
                            required
                        />
                        { fieldErrors.email && (
                            <span className="register__input-error">{fieldErrors.email}</span>
                        )}
                        <p className="register__name">Пароль</p>
                        <input
                            className={`register__input register__input_password ${fieldErrors.password ? "register__input_error-switch" : ""}`}
                            type="password"
                            name="password"
                            required
                        />
                        { fieldErrors.password && (
                            <span className="register__input-error">{fieldErrors.password}</span>
                        )}
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
}