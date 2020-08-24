import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifts';

export const GifGrid = ( {category} ) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifts(category);

    return (
        // <li key={category}>{category}</li>
        <>
        <h3 className="title animate__animated animate__fadeIn">{category}</h3>

        { loading && <p>Loading ...</p>}

        <div className="card-grid">
            {
                images.map(
                    (gif) => {
                        return <GifGridItem key = {gif.id} {...gif} />
                    }
                )
            }
        </div>
        </>
    )
}
