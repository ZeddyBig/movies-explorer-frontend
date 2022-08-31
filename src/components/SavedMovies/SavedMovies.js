import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    return (
        <main className="saved-movies">
            <Header isLoggedIn={props.isLoggedIn} isSavedMovies={props.isSavedMovies} />
            <SearchForm 
                movies={props.movies}
                shortMovieSwitchSaved={props.shortMovieSwitchSaved}
                setShortMovieSwitchSaved={props.setShortMovieSwitchSaved}
                searchSavedMovieList={props.searchSavedMovieList}
                searchValueSaved={props.searchValueSaved}
                setSearchValueSaved={props.setSearchValueSaved}
                isSavedMovies={props.isSavedMovies}
            />
            <MoviesCardList
                widthWindow={props.widthWindow}
                isSavedMovies={props.isSavedMovies}
                isMovies={props.isMovies}
                movies={props.movies}
                searchSavedMovieList={props.searchSavedMovieList}
                handleDeleteMovie={props.handleDeleteMovie}
                savedMovies={props.savedMovies}
            />
            <Footer />
        </main>
    )
}

export default SavedMovies;
