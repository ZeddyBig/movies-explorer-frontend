import MoviesCard from "../components/MoviesCard/MoviesCard";
import durationTransform from "./durationTransform";
import checkSavedMovies from "./checkSavedMovies";

const showMoviesList = (movies, handleSaveMovie, savedMovies, visibleMoviesCount) => {
    return movies.slice(0, visibleMoviesCount).map((movie, index) => {
        movie.isSaved = checkSavedMovies(movie.id, savedMovies);
        return (
            <MoviesCard 
                thumbnail={`https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`}
                title={movie.nameRU}
                duration={durationTransform(movie.duration)}
                key={index}
                movie={movie}
                id={movie.id}
                isSavedMovies={false}
                handleSaveMovie={handleSaveMovie}
            />
        )
    })    
}

export default showMoviesList;