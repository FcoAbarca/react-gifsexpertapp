import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [categoria, setCategoria] = useState('');
    
    const CargarCategoria = (e) => {
        e.preventDefault();

        if ( categoria.trim().length > 2) {
            setCategorias( (catg) =>[categoria, ...catg]);
            setCategoria('');
        }
    }
    return (
        <form onSubmit={CargarCategoria}>
            <input
                value = {categoria}
                onChange = {(e) => setCategoria(e.target.value)}
                placeholder="Buscar Categoria de Gifs"/>
        </form>
    )
}

AddCategory.prototype = {
    setCategorias : PropTypes.func.isRequired
}