import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default class Login extends Component {
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
            <section className="login">
                <Link to={"/"} className="login__logo">
                    <img src={logo} alt="Логотип" className="login__logo-image"/>
                </Link>
                <h1 className="login__title">
                    Рады видеть!
                </h1>
                <form className="login__form"
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    onInvalid={this.handleInvalid}
                >
                    <div className="login__form-top">
                        <p className="login__name">E-mail</p>
                        <input 
                            className={`login__input login__input_email ${fieldErrors.email ? "login__input_error-switch" : ""}`}
                            type="email" 
                            name="email"
                            required
                        />
                        { fieldErrors.email && (
                            <span className="login__input-error">{fieldErrors.email}</span>
                        )}

                        <p className="login__name">Пароль</p>
                        <input
                            className={`login__input login__input_password ${fieldErrors.password ? "login__input_error-switch" : ""}`}
                            type="password"
                            name="password"
                            required
                        />
                        { fieldErrors.password && (
                            <span className="login__input-error">{fieldErrors.password}</span>
                        )}
                    </div>
                    
                    <div className="login__form-bottom">
                        <button type="submit" className="login__form-button">
                            Войти
                        </button>
                        <div className="login__signup">
                            <p className="login__signup-text">
                                Ещё не зарегистрированы?
                            </p>
                            <Link to={"/signup"} className="login__signup-link">Регистрация</Link>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}