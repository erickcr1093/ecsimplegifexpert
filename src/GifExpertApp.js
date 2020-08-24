import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['bleach','sao','tokyo ghoul']

    const [categories, setCategories] = useState(['bleach']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Miray Nikki'] );
    //     // setCategories( c => [...categories, 'Miray Nikki']);
    //     console.log(categories);
    // }

    return (
        <>
            <h2>
                GifExpertApp
            </h2>
            <AddCategory setCategories={ setCategories} />
            <hr />
            <ul>
                {
                    categories.map(
                        category => (
                            <GifGrid 
                                key={category} 
                                category = {category}
                            />
                        )
                    )
                }
            </ul>
        </>
    )
}
