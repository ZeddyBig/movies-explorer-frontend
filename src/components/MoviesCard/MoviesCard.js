function MoviesCard({ thumbnail, title, duration, shortFilm, saved }) {
    return (
        <li className="movies-card">
            <div className="movies-card__movie-container">
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