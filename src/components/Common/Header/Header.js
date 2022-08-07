import logo from '../../../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <a href="/" className="header__logo">
                <img src={logo} alt="Логотип" className="header__logo-image"/>
            </a>
            <div className="header__movies_nav"> {/* Сделай списком и выровняй всё по центру относительно страницы */}
                <a href="!" className="header__movies">Фильмы</a>
                <a href="!" className="header__movies">Сохранённые фильмы</a>
            </div>
            <div className="header__signin-signup">
                <a href="!" className="header__signup">Регистрация</a>
                <a href="!" className="header__signin">Войти</a>
            </div>
            <a href="!" className="header__account">Аккаунт</a>
        </header>
    )
}

export default Header;
