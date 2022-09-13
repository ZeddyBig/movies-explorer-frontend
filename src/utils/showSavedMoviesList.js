import MoviesCard from "../components/MoviesCard/MoviesCard";
import checkSavedMovies from "./checkSavedMovies";

const showSavedMoviesList = (movies, handleDeleteMovie, savedMovies) => {
    return movies.map((movie, index) => {
        movie.isSaved = checkSavedMovies(movie.movieId, savedMovies);
        return (
            <MoviesCard
                thumbnail={movie.thumbnail}
                title={movie.nameRU}
                duration={movie.duration}
                key={index}
                movie={movie}
                isSavedMovies={true}
                handleDeleteMovie={handleDeleteMovie}
            />
        )
    })
}

export default showSavedMoviesList;