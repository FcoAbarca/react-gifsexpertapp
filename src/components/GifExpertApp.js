import React, {useState}  from 'react';
import {AddCategory} from './AddCategory'
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState([])

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr/>
            <AddCategory setCategorias = { setCategorias}/>
            {categorias.map( (item, i) => (
                <GifGrid category={item}
                    key ={item}/>
                    )
            )}
        </>
    )
}