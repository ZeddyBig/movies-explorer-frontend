export function movieLength(isSavedMovies, filteredMovies, searchMovieList, movies) {
    if (isSavedMovies) {
        return (
            <div className={`movies-card-list_zero ${(searchMovieList(movies)).length ? 'movies-card-list__disable': ``}`}>Фильмы не найдены</div>
        )
    } else {
        return (
            <div className={`movies-card-list_zero ${filteredMovies.length ? 'movies-card-list__disable': ``}`}>Фильмы не найдены</div>
        )
    }
}