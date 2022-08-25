import React from 'react';

function FilterCheckbox(props) {

    return (
        <div className="filterCheckbox">
            <input
                className='filterCheckbox__input'
                type='checkbox'
                id='shortMovie'
                onChange={(e) => props.shortMovieChange(e.target.checked)}
            />
            <p className='filterCheckbox__label'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;