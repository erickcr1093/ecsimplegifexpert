import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => { // receiving as function with {}
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( categories => [inputValue, ...categories] ); // call received 
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <pre>{inputValue}</pre>
            <input 
            type="text" 
            value={inputValue}
            onChange={ handleInputChange }
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}