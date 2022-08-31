import React from 'react';

function FilterCheckbox(props) {
    const handleChange = (e) => {
        const { checked } = e.target;
        if (props.isSavedMovies) {
            props.setShortMovieSwitchSaved(checked);
        } else {
            localStorage.setItem('checked-movies', checked);
            props.setShortMovieSwitch(checked);
            props.setFilteredMovies(props.searchMovieShort(props.movies));
            localStorage.setItem('filtered-movies', JSON.stringify(props.searchMovieShort(props.movies)));
        }
    }

    return (
        <div className="filterCheckbox">
            <input
                className='filterCheckbox__input'
                type='checkbox'
                id='shortMovie'
                checked={props.isSavedMovies ? props.shortMovieSwitchSaved : props.shortMovieSwitch}
                onChange={handleChange}
            />
            <p className='filterCheckbox__label'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;