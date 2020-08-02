import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientePok, anteriorPok} from '../redux/pokeDucks'

const Pokemones = () => {

    const dispatch = useDispatch();
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    console.log(pokemones)
    return (
        <div>
            <h1>Lista de Pokemones</h1>

            {
                pokemones.length ==0 &&
                <button onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener Pokemones</button>
            }

            {
                next &&
                <button onClick={() => dispatch(siguientePok())}>Siguiente</button>
            }

            {
                previous &&
                <button onClick={() => dispatch(anteriorPok())}>Anterior</button>
            }
            
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
