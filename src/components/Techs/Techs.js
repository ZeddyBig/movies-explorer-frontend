function Techs() {
    return (
        <section className="techs">
            <div className="techs_width">
                <h2 className="techs__title">
                    Технологии
                </h2>
                <div className="techs__line"/>
                <div className="techs__content">
                    <h3 className="techs__description-title">
                        7 технологий
                    </h3>
                    <p className="techs__description-subtitle">
                        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                    </p>
                    <ul className="techs__list">
                        <li className="techs__list-element">HTML</li>
                        <li className="techs__list-element">CSS</li>
                        <li className="techs__list-element">JS</li>
                        <li className="techs__list-element">React</li>
                        <li className="techs__list-element">Git</li>
                        <li className="techs__list-element">Express.js</li>
                        <li className="techs__list-element">mongoDB</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Techs;
