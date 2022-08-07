import promoImage from '../../../images/promo__image.svg';
import Header from "../../Common/Header/Header";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__width">
                <Header />
                <div className="promo__offer">
                    <div className="promo__title-subtitle">
                        <h1 className="promo__title">
                            Учебный проект студента факультета <br/> Веб-разработки.
                        </h1>
                        <p className="promo__subtitle">
                            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                        </p>
                    </div>
                    <img src={promoImage} alt="Планета Web" className="promo__image"/>
                </div>
                <a href="#about-project" className="promo__learn-more">
                    Узнать больше
                </a>
            </div>
        </section>
    )
}

export default Promo;
