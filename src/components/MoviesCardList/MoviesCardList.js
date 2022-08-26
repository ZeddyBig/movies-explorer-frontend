import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import showMoviesList from "../../utils/showMoviesList";
import showSavedMoviesList from "../../utils/showSavedMoviesList";

function MoviesCardList(props) {
    return (
        <div className="movies-card-list">
            <div className="movies-card-list__line"/>
            {
                (!props.isSavedMovies)
                ?
                <div className={`movies-card-list_zero ${props.filteredMovies.length ? 'movies-card-list__disable': ``}`}>Фильмы не найдены</div>
                :
                <div className={`movies-card-list_zero ${(props.searchSavedMovieList(props.movies)).length ? 'movies-card-list__disable': ``}`}>Фильмы не найдены</div>
            }
            <ul className="movies-card-list__list">
            {
                (!props.isSavedMovies)
                ? 
                    showMoviesList(props.filteredMovies, props.handleSaveMovie)
                :
                    showSavedMoviesList(props.searchSavedMovieList(props.movies), props.handleDeleteMovie)
            }            
            </ul>
            <div className="movies-card-list__more">
                <button type="button" className={`movies-card-list__more-button ${props.isSaved ? `movies-card-list__disable` : ``}`}>Ещё</button>
            </div>
        </div>
    )
}

export default MoviesCardList;