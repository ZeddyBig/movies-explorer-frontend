export function setMessageMovieLength(isSavedMovies, filteredMovies, searchSavedMovieList, movies, searchValueIsSet) {
    if (isSavedMovies) {
        return (
            <div className={`movies-card-list_zero ${(searchSavedMovieList(movies)).length ? 'movies-card-list__disable': ``}`}>Фильмы не найдены</div>
        )
    } else {
        return (
            <div className={`movies-card-list_zero ${filteredMovies.length ? 'movies-card-list__disable': ``}`}>{`${ searchValueIsSet ? `Фильмы не найдены` : `Нужно ввести ключевое слово`}`}</div>
        )
    }
}