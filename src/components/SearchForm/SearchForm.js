import searchIcon from "../../images/search__icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchMovieList(props.movies);
    }

    return (
        <div className="search-form">
            <form className="search-form__form" onSubmit={handleSubmit}>
                <img src={searchIcon} alt="Поиск" className="search__icon"/>
                <input 
                    className="search-form__input"
                    placeholder="Фильм"
                    required
                    onChange={(e) => props.setSearchValue(e.target.value)}
                />
                <button type="submit" className="search-form__button">Найти</button>
            </form>
            <FilterCheckbox shortMovieChange={props.shortMovieChange}/>
        </div>
    )
}

export default SearchForm;