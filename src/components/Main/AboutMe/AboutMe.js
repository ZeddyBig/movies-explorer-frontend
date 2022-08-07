import image from '../../../images/about-me__content-picture.png';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">
                Студент
            </h2>
            <div className="about-me__line"/>
            <div className="about-me__content">
                <div className="about-me__content-info">
                    <div className="about-me__content-text">
                        <h3 className="about-me__content-title">
                            Юрий
                        </h3>
                        <h4 className="about-me__content-subtitle">
                            Фронтенд-разработчик, 28 лет
                        </h4>
                        <p className="about-me__content-story">
                            Я родился в Иваново, сейчас живу в городе Ликино-Дулёво, МО. Закончил факультет "Математики и компьютерных наук" в ИвГУ. У меня есть любимая жена. Я люблю кинематограф и видеоигры. Со школы мечтал стать программистом. Помогли мне в этом платные курсы от Яндекс.Практикума. Здесь я сумел структурировать свои знания, изучил современные методы разработки и получил необходимую уверенность в том, что у меня всё получится. 
                        </p>
                    </div>
                    <div className="about-me__content-links">
                        <a rel='noopener noreferrer' target='_blank' href="https://vk.com/zeddybig" className="about-me__content-link">Вконтакте</a>
                        <a rel='noopener noreferrer' target='_blank' href="https://github.com/ZeddyBig" className="about-me__content-link">Github</a>
                    </div>
                </div>
                <img src={image} alt="Юрий Четвериков" className="about-me__content-picture"/>
            </div>
        </section>
    )
}

export default AboutMe;
