import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    return (
        <main className="saved-movies">
            <Header isLoggedIn={props.isLoggedIn} isSavedMovies={props.isSavedMovies} />
            <SearchForm 
                setFilteredMovies={props.setFilteredMovies}
                movies={props.movies}
                isSavedMovies={props.isSavedMovies}
                setSearchValue={props.setSearchValue}
                shortMovieSwitch={props.shortMovieSwitch}
                shortMovieChange={props.shortMovieChange}
                searchMovieList={props.searchMovieList}
                searchValue={props.searchValue}
            />
            <MoviesCardList
                widthWindow={props.widthWindow}
                filteredMovies={props.filteredMovies}
                setFilteredMovies={props.setFilteredMovies}
                isSavedMovies={props.isSavedMovies}
                isMovies={props.isMovies}
                movies={props.movies}
                searchMovieList={props.searchMovieList}
                handleDeleteMovie={props.handleDeleteMovie}
                savedMovies={props.savedMovies}
            />
            <Footer />
        </main>
    )
}

export default SavedMovies;
