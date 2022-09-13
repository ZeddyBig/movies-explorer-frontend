import searchIcon from "../../images/search__icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.isSavedMovies) {
            props.searchSavedMovieList(props.movies);
        } else {
            localStorage.setItem('filtered-movies', JSON.stringify(props.searchMovieList(props.movies)));
            localStorage.setItem('search-value-movies', props.searchValue);
            props.setFilteredMovies(props.searchMovieList(props.movies));
        }
    }

    const handleChange = (e) => {
        const { value } = e.target;
        if (props.isSavedMovies) {
            props.setSearchValueSaved(value);
        } else {
            props.setSearchValue(value);
        }
    }

    return (
        <div className="search-form">
            <form className="search-form__form" onSubmit={handleSubmit}>
                <img src={searchIcon} alt="Поиск" className="search__icon"/>
                <input 
                    className="search-form__input"
                    placeholder="Фильм"
                    value={(props.isSavedMovies ? props.searchValueSaved : props.searchValue) || ''}
                    onChange={handleChange}
                />
                <button type="submit" className="search-form__button">Найти</button>
            </form>
            <FilterCheckbox
                isSavedMovies={props.isSavedMovies}
                shortMovieSwitch={props.shortMovieSwitch}
                setShortMovieSwitch={props.setShortMovieSwitch}
                shortMovieSwitchSaved={props.shortMovieSwitchSaved}
                setShortMovieSwitchSaved={props.setShortMovieSwitchSaved}
                setFilteredMovies={props.setFilteredMovies}
                searchMovieShort={props.searchMovieShort}
                movies={props.movies}
            />
        </div>
    )
}

export default SearchForm;