import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation';

const Login = (props) => {
    let { handleChange, errors, formParams, isValid } = useFormValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        let { email, password } = formParams;
        props.handleLogin({ email, password });
    }

    return (
        <main className="login">
            <Link to={"/"} className="login__logo">
                <img src={logo} alt="Логотип" className="login__logo-image"/>
            </Link>
            <h1 className="login__title">
                Рады видеть!
            </h1>
            <form className="login__form"
                onSubmit={handleSubmit}
            >
                <div className="login__form-top">
                    <p className="login__name">E-mail</p>
                    <input 
                        className={`login__input login__input_email ${errors.email ? "login__input_error-switch" : ""}`}
                        type="email" 
                        name="email"
                        value={formParams.email}
                        required
                        onChange={handleChange}
                    />
                    { errors.email && (
                        <span className="login__input-error">{errors.email}</span>
                    )}

                    <p className="login__name">Пароль</p>
                    <input
                        className={`login__input login__input_password ${errors.password ? "login__input_error-switch" : ""}`}
                        type="password"
                        name="password"
                        required
                        onChange={handleChange}
                    />
                    { errors.password && (
                        <span className="login__input-error">{errors.password}</span>
                    )}
                </div>
                
                <div className="login__form-bottom">
                    <button 
                        type="submit"
                        disabled={!isValid ? true : false}
                        className="login__form-button"
                    >
                        Войти
                    </button>
                    <div className="login__signup">
                        <p className="login__signup-text">
                            Ещё не зарегистрированы?
                        </p>
                        <Link to={props.linkTo} className="login__signup-link">Регистрация</Link>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Login;