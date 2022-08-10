import React from 'react';

function FilterCheckbox() {
    return (
        <div className="filterCheckbox">
            <input className='filterCheckbox__input' type='checkbox' id='shortFilm'/>
            <p className='filterCheckbox__label'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;