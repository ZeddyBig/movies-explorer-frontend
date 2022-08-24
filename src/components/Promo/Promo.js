import promoImage from '../../images/promo__image.svg';
import Header from "../Common/Header/Header";

function Promo(props) {
    return (
        <section className="promo">
            <Header isLoggedIn={props.isLoggedIn} isMain={props.isMain}/>
            <div className="promo__width">
                <div className="promo__offer">
                    <div className="promo__title-subtitle">
                        <h1 className="promo__title">
                            Учебный проект студента факультета Веб&#8209;разработки.
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
