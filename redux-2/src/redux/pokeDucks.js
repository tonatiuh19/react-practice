import axios from 'axios'

const dataInicial = {
    array: []
}

const OBTENER_POKEMONES_EXITO = 'OBTENET_POKEMONES_EXITO'

export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload}
        default:
            return state
    }
}

export const obtenerPokemonesAccion  = () => async (dispatch, getState) => {
    try{
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })

    }catch(error){
        console.log(error)
    }
}