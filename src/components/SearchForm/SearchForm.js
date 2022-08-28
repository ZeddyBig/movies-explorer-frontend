import searchIcon from "../../images/search__icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setFilteredMovies(props.searchMovieList(props.movies));
    }

    const handleChange = (e) => {
        const { value } = e.target;
        props.setSearchValue(value);
    }

    return (
        <div className="search-form">
            <form className="search-form__form" onSubmit={handleSubmit}>
                <img src={searchIcon} alt="Поиск" className="search__icon"/>
                <input 
                    className="search-form__input"
                    placeholder="Фильм"
                    value={props.searchValue || ''}
                    onChange={handleChange}
                />
                <button type="submit" className="search-form__button">Найти</button>
            </form>
            <FilterCheckbox
                shortMovieSwitch={props.shortMovieSwitch}
                shortMovieChange={props.shortMovieChange}
            />
        </div>
    )
}

export default SearchForm;