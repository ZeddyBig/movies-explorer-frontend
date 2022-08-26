import MoviesCard from "../components/MoviesCard/MoviesCard";
import durationTransform from "./durationTransform";

const showMoviesList = (movies, handleSaveMovie) => {
    return movies.map((movie, index) => {
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