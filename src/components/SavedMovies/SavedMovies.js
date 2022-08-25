import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    return (
        <main className="saved-movies">
            <Header isLoggedIn={props.isLoggedIn} isSavedMovies={props.isSavedMovies} />
            <SearchForm 
                movies={props.movies}
                setSearchValue={props.setSearchValue}
                shortMovieChange={props.shortMovieChange}
                searchMovieList={props.searchMovieList}
            />
            <MoviesCardList
                isSavedMovies={props.isSavedMovies}
                isMovies={props.isMovies}
                movies={props.movies}
                searchMovieList={props.searchMovieList}
                handleDeleteMovie={props.handleDeleteMovie}
            />
            <Footer />
        </main>
    )
}

export default SavedMovies;
