import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import showMoviesList from "../../utils/showMoviesList";
import showSavedMoviesList from "../../utils/showSavedMoviesList";
import { getMoreStep, getInitialCount } from '../../utils/getMoreStep';
import { movieLength } from "../../utils/movieLength";

function MoviesCardList(props) {
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const [visibleMoviesCount, setVisibleMoviesCount] = useState(getInitialCount(props.widthWindow));
    const handleLoadMore = () => {
        setVisibleMoviesCount((prevCount) => prevCount + getMoreStep(props.widthWindow));
    }
    const [loading, setLoading] = useState(false);
    
    return (
        <div className="movies-card-list">
            <div className="movies-card-list__line"/>
            {
                loading
                ?
                <Preloader/>
                : 
                <div className="movies-card-list__after-preloader">
                    {
                        movieLength(props.isSavedMovies, props.filteredMovies, props.searchMovieList, props.movies)
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
            }
        </div>
    )
}

export default MoviesCardList;