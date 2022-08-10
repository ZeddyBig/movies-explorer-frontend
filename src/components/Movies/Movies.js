import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

export default function Movies(props) {
    return (
        <section className="movies">
            <Header isLoggedIn={props.isLoggedIn} isMovies={true} />
            <Footer />
        </section>
    )
}
