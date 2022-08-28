import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.svg';

function Header(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const ref = useRef(null);

    const handleClick = (e) => {
        if (!mobileMenuOpen) {
            ref.current.classList.add('open');
            setMobileMenuOpen(true);
        } else {
            ref.current.classList.remove('open');
            setMobileMenuOpen(false);
        }
    }

    return (
        <header className="header">
            <NavLink to="/" className="header__logo">
                <img src={logo} alt="Логотип" className="header__logo-image"/>
            </NavLink>
            <nav className="header__nav">
                <div className={`header__signin-signup ${props.isLoggedIn ? `header__disable-block` : ``}`}>
                    <NavLink to="/signup" className="header__signup">Регистрация</NavLink>
                    <NavLink to="/signin" className="header__signin">Войти</NavLink>
                </div>
                <div className={`header__movies_nav ${props.isLoggedIn ? ``: `header__disable-block`}`}> {/* Сделай списком и выровняй всё по центру относительно страницы */}
                    <NavLink to="/movies" className={`header__movies ${props.isMovies ? 'header__selected' : ''}`}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className={`header__movies ${props.isSavedMovies ? 'header__selected' : ''}`}>Сохранённые фильмы</NavLink>
                </div>
                <NavLink to="/profile" className={`header__account header__account_big ${(props.isLoggedIn || mobileMenuOpen) ? ``: `header__disable-block`}`}>Аккаунт</NavLink>
            </nav>

            <div className={`header__menu-btn ${(props.isMain && !props.isLoggedIn) ? `header__disable-block` : ``}`} ref={ref} onClick={handleClick}>
                <div className="header__menu-btn-burger"></div>
            </div>

            <div className={`header__nav-mobile-background ${mobileMenuOpen ? `header__nav-mobile-background_opened` : ``}`}>
                <nav className={`header__nav-mobile ${mobileMenuOpen ? `header__nav-mobile_opened` : ``}`}>
                    <ul className="nav-mobile">
                        <li className="nav-mobile__element">
                            <NavLink to="/" className="nav-mobile__link">Главная</NavLink>
                        </li>
                        <li className="nav-mobile__element">
                            <NavLink to="/movies" className={`nav-mobile__link ${props.isMovies ? 'nav-mobile__selected' : ''}`}>Фильмы</NavLink>
                        </li>
                        <li className="nav-mobile__element">
                            <NavLink to="/saved-movies" className={`nav-mobile__link ${props.isSavedMovies ? 'nav-mobile__selected' : ''}`}>Сохранённые фильмы</NavLink>
                        </li>
                    </ul>
                    <NavLink to="/profile" className="nav-mobile__account header__account header__account_small">Аккаунт</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;
