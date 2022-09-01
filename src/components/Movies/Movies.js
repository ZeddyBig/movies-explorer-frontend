import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {

    return (
        <main className="movies">
            <Header isLoggedIn={props.isLoggedIn} isMovies={props.isMovies} />
            <SearchForm
                setFilteredMovies={props.setFilteredMovies}
                movies={props.movies}
                isSavedMovies={props.isSavedMovies}
                setSearchValue={props.setSearchValue}
                shortMovieSwitch={props.shortMovieSwitch}
                setShortMovieSwitch={props.setShortMovieSwitch}
                searchMovieList={props.searchMovieList}
                searchValue={props.searchValue}
                searchMovieShort={props.searchMovieShort}
            />
            <MoviesCardList
                widthWindow={props.widthWindow}
                filteredMovies={props.filteredMovies}
                setFilteredMovies={props.setFilteredMovies}
                isMovies={props.isMovies}
                isSavedMovies={props.isSavedMovies}
                movies={props.movies}
                handleSaveMovie={props.handleSaveMovie}
                searchMovieList={props.searchMovieList}
                handleDeleteMovie={props.handleDeleteMovie}
                savedMovies={props.savedMovies}
                searchMovieShort={props.searchMovieShort}
                searchValueIsSet={props.searchValueIsSet}
                setSearchValueSaved={props.setSearchValueSaved}
            />
            <Footer />
        </main>
    )
}

export default Movies;