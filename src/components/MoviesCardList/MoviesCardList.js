import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import showMoviesList from "../../utils/showMoviesList";
import showSavedMoviesList from "../../utils/showSavedMoviesList";
import { getMoreStep, getInitialCount } from '../../utils/getMoreStep';
import { setMessageMovieLength } from "../../utils/setMessageMovieLength";

function MoviesCardList(props) {

    useEffect(() => {
        setLoading(true)
        props.setSearchValueSaved('')
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
                        setMessageMovieLength(props.isSavedMovies, props.filteredMovies, props.searchSavedMovieList, props.movies, props.searchValueIsSet)
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
                                props.searchSavedMovieList(props.movies),
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