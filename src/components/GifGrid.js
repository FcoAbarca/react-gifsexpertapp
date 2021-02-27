import React from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const {loding, data: images} = useFetchGifs(category);
        
    return (
        <> { loding && <p>Cargando...</p>}
            <h3>{category}</h3>
            <div className="card-grid">
            
                {images.map( (img) => (
                    <GifGridItem key= {img.id} {...img}/>
                    )
                )}
            </div>
        </>
    )
}
