import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientePok} from '../redux/pokeDucks'

const Pokemones = () => {

    const dispatch = useDispatch();
    const pokemones = useSelector(store => store.pokemones.array)
    console.log(pokemones)
    return (
        <div>
            <h1>Lista de Pokemones</h1>
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener Pokemones</button>
            <button onClick={() => dispatch(siguientePok(20))}>Siguiente</button>
            <ul>
                {
                    pokemones.map(item => (
                    <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
