import logo from '../../../images/logo.svg';

function Header(props) {
    return (
        <header className="header">
            <a href="/" className="header__logo">
                <img src={logo} alt="Логотип" className="header__logo-image"/>
            </a>
            <div className={`header__movies_nav ${props.isLoggedIn ? ``: `header__disable-block`}`}> {/* Сделай списком и выровняй всё по центру относительно страницы */}
                <a href="/movies" className={`header__movies ${props.isMovies ? 'header__bold' : ''}`}>Фильмы</a>
                <a href="!" className="header__movies">Сохранённые фильмы</a>
            </div>
            <div className={`header__signin-signup ${props.isLoggedIn ? `header__disable-block` : ``}`}>
                <a href="!" className="header__signup">Регистрация</a>
                <a href="!" className="header__signin">Войти</a>
            </div>
            <a href="/profile" className={`header__account ${props.isLoggedIn ? ``: `header__disable-block`}`}>Аккаунт</a>
        </header>
    )
}

export default Header;
