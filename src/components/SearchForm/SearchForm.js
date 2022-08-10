import searchIcon from "../../images/search__icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <div className="search-form">
            <form className="search-form__form">
                <img src={searchIcon} alt="Поиск" className="search__icon"/>
                <input className="search-form__input" placeholder="Фильм"></input>
                <button className="search-form__button">Найти</button>
            </form>
            <FilterCheckbox />
        </div>
    )
}

export default SearchForm;