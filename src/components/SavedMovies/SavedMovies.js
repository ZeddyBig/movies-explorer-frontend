import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    return (
        <section className="saved-movies">
            <Header isLoggedIn={props.isLoggedIn} isSavedMovies={props.isSavedMovies} />
            <SearchForm />
            <MoviesCardList isSaved={true} />
            <Footer />
        </section>
    )
}

export default SavedMovies;
