import { useState } from "react";
import showMoviesList from "../../utils/showMoviesList";
import showSavedMoviesList from "../../utils/showSavedMoviesList";
import { getMoreStep, getInitialCount } from '../../utils/getMoreStep';

function MoviesCardList(props) {
    const [visibleMoviesCount, setVisibleMoviesCount] = useState(getInitialCount(props.widthWindow));
    const handleLoadMore = () => {
        setVisibleMoviesCount((prevCount) => prevCount + getMoreStep(props.widthWindow));
    }

    return (
        <div className="movies-card-list">
            <div className="movies-card-list__line"/>
            {
                (!props.isSavedMovies)
                ?
                <div className={`movies-card-list_zero ${props.filteredMovies.length ? 'movies-card-list__disable': ``}`}>Фильмы не найдены</div>
                :
                <div className={`movies-card-list_zero ${(props.searchMovieList(props.movies)).length ? 'movies-card-list__disable': ``}`}>Фильмы не найдены</div>
            }
            <ul className="movies-card-list__list">
            {
                (!props.isSavedMovies)
                ? 
                    showMoviesList(
                        props.filteredMovies,
                        props.handleSaveMovie,
                        props.handleDeleteMovie,
                        props.savedMovies,
                        visibleMoviesCount
                    )
                :
                    showSavedMoviesList(
                        props.searchMovieList(props.movies),
                        props.handleDeleteMovie,
                        props.savedMovies
                    )
            }            
            </ul>
            <div className="movies-card-list__more">
                {
                    visibleMoviesCount < ( props.isSavedMovies ? props.movies.length : props.filteredMovies.length) && (
                    <button onClick={handleLoadMore} type="button" className={`movies-card-list__more-button ${props.isSavedMovies ? 'movies-card-list__disable' : ''}`}>Ещё</button>
                )}
                
            </div>
        </div>
    )
}

export default MoviesCardList;