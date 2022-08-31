import React, { useState } from "react";
import movieAddedIcon from "../../images/movie-added.svg";
import deleteMovieIcon from "../../images/delete-movie.svg"
import transformDuration from "../../utils/transformDuration";

function MoviesCard({ thumbnail, title, duration, isSavedMovies,
    handleSaveMovie, movie, handleDeleteMovie }) {
    const [icon, setIcon] = useState(movieAddedIcon);

    const handleSave = (e) => {
        e.preventDefault();
        movie.isSaved = true;
        handleSaveMovie(movie);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        movie.isSaved = false;
        isSavedMovies ? handleDeleteMovie(movie.movieId) : handleDeleteMovie(movie.id)
    }
    
    const mouseEnter = () => {
        setIcon(deleteMovieIcon);
    }

    const mouseLeave = () => {
        setIcon(movieAddedIcon);
    }

    return (
        <li className="movies-card">
            <div className="movies-card__movie-container">
                <a rel='noopener noreferrer' target='_blank' href={movie.trailerLink} className="movies-card__button_block">
                    <button type="button" className={`movies-card__button ${ movie.isSaved ? `movies-card__disable` : ``}`} onClick={handleSave}>Сохранить</button>
                    <img src={movieAddedIcon} alt="Фильм добавлен" className={`movies-card__added ${movie.isSaved ? `` : `movies-card__disable`} ${isSavedMovies ? 'movies-card__disable' : ''}`} />
                    <button type="button" onClick={handleDelete} className={`movies-card__delete-button ${movie.isSaved ? `` : `movies-card__disable`}`}>
                        <img src={isSavedMovies ? deleteMovieIcon : icon} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} alt={`Удалить фильм`} className={`movies-card__delete-button-img ${movie.isSaved ? `` : `movies-card__disable`}`}/>
                    </button>
                </a>
                <img className='movies-card__movie-img' src={thumbnail} alt='Карточка фильма' />
            </div>
            <div className='movies-card__movie-description'>
                <h2 className='movies-card__movie-title'>{title}</h2>
                <p className='movies-card__movie-duration'>{transformDuration(duration)}</p>
            </div>
        </li>
    )
}

export default MoviesCard;