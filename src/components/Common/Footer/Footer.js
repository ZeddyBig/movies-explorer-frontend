function Footer() {
    return (
        <section className="footer">
            <p className="footer__info">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__line"/>
            <div className="footer__data-and-links">
                <p className="footer__data">
                    © 2022
                </p>
                <ul className="footer__links">
                    <li className="footer__link-block">
                        <a rel='noopener noreferrer' target='_blank' href="https://practicum.yandex.ru/" className="footer__link">
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__link-block">
                        <a rel='noopener noreferrer' target='_blank' href="https://github.com/ZeddyBig" className="footer__link">
                            Github
                        </a>
                    </li>
                    <li className="footer__link-block">
                        <a rel='noopener noreferrer' target='_blank' href="https://vk.com/zeddybig" className="footer__link">
                            Вконтакте
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;
