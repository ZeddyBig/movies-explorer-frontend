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
                setSearchValue={props.setSearchValue}
                isSavedMovies={props.isSavedMovies}
                shortMovieSwitch={props.shortMovieSwitch}
                shortMovieChange={props.shortMovieChange}
                searchMovieList={props.searchMovieList}
                searchValue={props.searchValue}
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
            />
            <Footer />
        </main>
    )
}

export default Movies;