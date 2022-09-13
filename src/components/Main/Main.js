import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Common/Footer/Footer';

function Main(props) {
    return (
        <main className="main">
            <Promo isLoggedIn={props.isLoggedIn} isMain={props.isMain}/>
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
}

export default Main;
