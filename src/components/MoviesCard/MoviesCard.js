import React, { useState } from "react";
import movieAddedIcon from "../../images/movie-added.svg";
import deleteMovieIcon from "../../images/delete-movie.svg"

function MoviesCard({ thumbnail, title, duration, isSavedMovies, isMovies, handleSaveMovie, movie, handleDeleteMovie }) {
    const [added, setAdded] = useState(movie.isSaved);
    const [icon, setIcon] = useState(movieAddedIcon);

    if (isSavedMovies) {
        movie.isSaved = true;
    } 

    const handleSave = (e) => {
        e.preventDefault();
        setAdded(true);
        handleSaveMovie(movie);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setAdded(false);
        handleDeleteMovie(movie._id);
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
                <div className={`movies-card__button_block ${ added ? `movies-card__disable` : ``}`}>
                    <button type="button" className={`movies-card__button ${ added ? `movies-card__disable` : ``}`} onClick={handleSave}>Сохранить</button>
                    <img src={movieAddedIcon} alt="Фильм добавлен" className={`movies-card__added ${added ? `` : `movies-card__disable`}`} />
                </div>
                <div className={`movies-card__button_block ${added ? `` : `movies-card__disable`}`}>
                    <button type="button" onClick={isMovies ? ((e) => (e)) : handleDelete} className="movies-card__delete-button">
                        <img src={icon} onMouseEnter={isMovies ? ((e) => (e)) : mouseEnter} onMouseLeave={mouseLeave} alt={`Удалить фильм`} className="movies-card__delete-button-img" />
                    </button>
                </div>
                <img className='movies-card__movie-img' src={thumbnail} alt='Карточка фильма' />
            </div>
            <div className='movies-card__movie-description'>
                <h2 className='movies-card__movie-title'>{title}</h2>
                <p className='movies-card__movie-duration'>{duration}</p>
            </div>
        </li>
    )
}

export default MoviesCard;