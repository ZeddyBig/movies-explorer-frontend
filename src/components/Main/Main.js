import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Common/Footer/Footer';

function Main(props) {
    return (
        <section className="main">
            <Promo isLoggedIn={props.isLoggedIn}/>
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </section>
    )
}

export default Main;
