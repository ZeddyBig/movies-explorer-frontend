import MoviesCard from "../components/MoviesCard/MoviesCard";
import durationTransform from "./durationTransform";

const showSavedMoviesList = (movies, handleDeleteMovie) => {
    return movies.map((movie, index) => {
        return (
            <MoviesCard
                thumbnail={movie.thumbnail}
                title={movie.nameRU}
                duration={durationTransform(movie.duration)}
                key={index}
                movie={movie}
                id={movie.movieId}
                isSavedMovies={true}
                handleDeleteMovie={handleDeleteMovie}
            />
        )
    })
}

export default showSavedMoviesList;