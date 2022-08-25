import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation';

const Register = (props) => {
    let { handleChange, errors, formParams, isValid } = useFormValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, email, password } = formParams;
        props.handleRegister({ name, email, password });
    }
    
    return (
        <main className="register">
            <Link to={"/"} className="register__logo">
                <img src={logo} alt="Логотип" className="register__logo-image"/>
            </Link>
            <h1 className="register__title">
                Добро пожаловать!
            </h1>
            <form className="register__form"
                onSubmit={handleSubmit}
            >
                <div className="register__form-top">
                    <p className="register__name">Имя</p>
                    <input 
                        className={`register__input register__input_name ${errors.name ? "register__input_error-switch" : ""}`}
                        type="text" 
                        name="name"
                        required 
                        minLength="2"
                        maxLength="40"
                        onChange={handleChange}
                    />
                    { errors.name && (
                        <span className="register__input-error">{errors.name}</span>
                    )}
                    <p className="register__name">E-mail</p>
                    <input 
                        className={`register__input register__input_email ${errors.email ? "register__input_error-switch" : ""}`}
                        type="email" 
                        name="email"
                        required
                        onChange={handleChange}
                    />
                    { errors.email && (
                        <span className="register__input-error">{errors.email}</span>
                    )}
                    <p className="register__name">Пароль</p>
                    <input
                        className={`register__input register__input_password ${errors.password ? "register__input_error-switch" : ""}`}
                        type="password"
                        name="password"
                        required
                        onChange={handleChange}
                    />
                    { errors.password && (
                        <span className="register__input-error">{errors.password}</span>
                    )}
                </div>
                
                <div className="register__form-bottom">
                    <button 
                        type="submit"
                        disabled={!isValid ? true : false}
                        className="register__form-button"
                    >
                            Зарегистрироваться
                    </button>
                    <div className="register__signin">
                        <p className="register__signin-text">
                            Уже зарегистрированы?
                        </p>
                        <Link to={props.linkTo} className="register__signin-link">Войти</Link>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Register;