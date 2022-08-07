function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">
                Портфолио
            </h2>
            <ul className="portfolio__elements">
                <li className="portfolio__element">
                    <div className="portfolio__name-and-link">
                        <h3 className="portfolio__name">
                            Статичный сайт
                        </h3>
                        <a rel='noopener noreferrer' target='_blank' href="https://github.com/ZeddyBig/how-to-learn" className="portfolio__link">
                            ↗
                        </a>
                    </div> 
                    <div className="portfolio__line"/>
                </li>
                <li className="portfolio__element">
                    <div className="portfolio__name-and-link">
                        <h3 className="portfolio__name">
                            Адаптивный сайт
                        </h3>
                        <a rel='noopener noreferrer' target='_blank' href="https://github.com/ZeddyBig/russian-travel" className="portfolio__link">
                            ↗
                        </a>
                    </div> 
                    <div className="portfolio__line"/>
                </li>
                <li className="portfolio__element">
                    <div className="portfolio__name-and-link">
                        <h3 className="portfolio__name">
                            Одностраничное приложение
                        </h3>
                        <a rel='noopener noreferrer' target='_blank' href="https://github.com/ZeddyBig/react-mesto-api-full" className="portfolio__link">
                            ↗
                        </a>
                    </div> 
                    <div className="portfolio__line"/>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
