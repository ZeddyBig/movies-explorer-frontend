import MoviesCard from "../components/MoviesCard/MoviesCard";
import transformDuration from "./transformDuration";
import checkSavedMovies from "./checkSavedMovies";

const showSavedMoviesList = (movies, handleDeleteMovie, savedMovies) => {
    return movies.map((movie, index) => {
        movie.isSaved = checkSavedMovies(movie.movieId, savedMovies);
        return (
            <MoviesCard
                thumbnail={movie.thumbnail}
                title={movie.nameRU}
                duration={transformDuration(movie.duration)}
                key={index}
                movie={movie}
                isSavedMovies={true}
                handleDeleteMovie={handleDeleteMovie}
            />
        )
    })
}

export default showSavedMoviesList;