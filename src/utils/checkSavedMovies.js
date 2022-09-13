function checkSavedMovies(id, movies) {
    return (movies.some((movie) => (
        movie.movieId === id.toString()
    )));
}

export default checkSavedMovies;