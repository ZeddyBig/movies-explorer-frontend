import React from 'react';

function FilterCheckbox(props) {
    const handleChange = (e) => {
        const { checked } = e.target;
        props.shortMovieChange(checked);
    }

    return (
        <div className="filterCheckbox">
            <input
                className='filterCheckbox__input'
                type='checkbox'
                id='shortMovie'
                checked={props.shortMovieSwitch}
                onChange={handleChange}
            />
            <p className='filterCheckbox__label'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;