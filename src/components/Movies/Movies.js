import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    return (
        <main className="movies">
            <Header isLoggedIn={props.isLoggedIn} isMovies={props.isMovies} />
            <SearchForm />
            <MoviesCardList isSaved={false} />
            <Footer />
        </main>
    )
}

export default Movies;