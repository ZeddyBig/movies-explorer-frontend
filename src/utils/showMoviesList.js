import MoviesCard from "../components/MoviesCard/MoviesCard";
import durationTransform from "./durationTransform";
import checkSavedMovies from "./checkSavedMovies";

const showMoviesList = (movies, handleSaveMovie, handleDeleteMovie, savedMovies, visibleMoviesCount) => {
    return movies.slice(0, visibleMoviesCount).map((movie, index) => {
        movie.isSaved = checkSavedMovies(movie.id, savedMovies);
        return (
            <MoviesCard 
                thumbnail={`https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`}
                title={movie.nameRU}
                duration={durationTransform(movie.duration)}
                key={index}
                movie={movie}
                isSavedMovies={false}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
            />
        )
    })    
}

export default showMoviesList;