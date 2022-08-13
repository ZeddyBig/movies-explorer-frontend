function AboutProject() {
    return (
        <section id="about-project" className="about-project">
            <h2 className="about-project__title">
                О проекте
            </h2>
            <div className="about-project__line"/>
            <div className="about-project__descriptions">
                <div className="about-project__description">
                    <h3 className="about-project__description-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__description-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__description">
                    <h3 className="about-project__description-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__description-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__weeks">
                <div className="about-project__week-one">1 неделя</div>
                <div className="about-project__week-four">4 недели</div>
                <div className="about-project__weeks-under">Back-end</div>
                <div className="about-project__weeks-under">Front-end</div>
            </div>
        </section>
    )
}

export default AboutProject;
