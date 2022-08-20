import React, { useState } from "react";
import movieAddedIcon from "../../images/movie-added.svg";
import deleteMovieIcon from "../../images/delete-movie.svg"

function MoviesCard({ thumbnail, title, duration, shortFilm, isSaved }) {
    const [Added, setAdded] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setAdded(true);
    }

    return (
        <li className="movies-card">
            <div className="movies-card__movie-container">
                <div className={`movies-card__button_block ${isSaved ? `movies-card__disable` : ``}`}>
                    <button type="button" className={`movies-card__button ${Added ? `movies-card__disable` : ``}`} onClick={handleClick}>Сохранить</button>
                    <img src={movieAddedIcon} alt="Фильм добавлен" className={`movies-card__added ${Added ? `` : `movies-card__disable`}`} />
                </div>
                <div className={`movies-card__button_block ${isSaved ? `` : `movies-card__disable`}`}>
                    <button type="button" className="movies-card__delete-button">
                        <img src={deleteMovieIcon} alt={`Удалить фильм`} className="movies-card__delete-button-img" />
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