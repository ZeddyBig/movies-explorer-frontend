import React, { useState } from "react";
import movieAddedIcon from "../../images/movie-added.svg";
import deleteMovieIcon from "../../images/delete-movie.svg"

function MoviesCard({ thumbnail, title, duration, isSavedMovies,
    handleSaveMovie, movie, handleDeleteMovie }) {
    
    const [added, setAdded] = useState(movie.isSaved);
    const [icon, setIcon] = useState(movieAddedIcon);

    const handleSave = (e) => {
        e.preventDefault();
        setAdded(true);
        handleSaveMovie(movie);
    }

    const handleDelete = (e) => {
        e.preventDefault();
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
                <a rel='noopener noreferrer' target='_blank' href={movie.trailerLink} className="movies-card__button_block">
                    <button type="button" className={`movies-card__button ${ added ? `movies-card__disable` : ``}`} onClick={handleSave}>Сохранить</button>
                    <img src={movieAddedIcon} alt="Фильм добавлен" className={`movies-card__added ${added ? `` : `movies-card__disable`}`} />
                    <button type="button" onClick={!isSavedMovies ? ((e) => (e)) : handleDelete} className={`movies-card__delete-button ${added ? `` : `movies-card__disable`}`}>
                        <img src={icon} onMouseEnter={!isSavedMovies ? ((e) => (e)) : mouseEnter} onMouseLeave={mouseLeave} alt={`Удалить фильм`} className={`movies-card__delete-button-img ${added ? `` : `movies-card__disable`}`}/>
                    </button>
                </a>
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