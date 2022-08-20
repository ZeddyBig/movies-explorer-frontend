function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">
                Портфолио
            </h2>
            <ul className="portfolio__elements">
                <li className="portfolio__element">
                    <a rel='noopener noreferrer' target='_blank' href="https://github.com/ZeddyBig/how-to-learn" className="portfolio__link">
                        <h3 className="portfolio__name">
                            Статичный сайт
                        </h3>
                        <p className="portfolio__arrow">
                            ↗
                        </p>
                    </a> 
                    <div className="portfolio__line"/>
                </li>
                <li className="portfolio__element">
                    <a rel='noopener noreferrer' target='_blank' href="https://github.com/ZeddyBig/how-to-learn" className="portfolio__link">
                        <h3 className="portfolio__name">
                            Адаптивный сайт
                        </h3>
                        <p className="portfolio__arrow">
                            ↗
                        </p>
                    </a> 
                    <div className="portfolio__line"/>
                </li>
                <li className="portfolio__element">
                    <a rel='noopener noreferrer' target='_blank' href="https://github.com/ZeddyBig/how-to-learn" className="portfolio__link">
                        <h3 className="portfolio__name">
                            Одностраничное приложение
                        </h3>
                        <p className="portfolio__arrow">
                            ↗
                        </p>
                    </a> 
                    <div className="portfolio__line"/>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
