import axios from 'axios'

const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'

export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const obtenerPokemonesAccion  = () => async (dispatch, getState) => {

    // const {offset} = getState().pokemones;
    // console.log(offset)
    

    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })

    }catch(error){
        console.log(error)
    }
}

export const siguientePok = () => async (dispatch, getState) => {
    // const {offset} = getState().pokemones;
    const {next} = getState().pokemones
    // const siguiente = offset+numero;
    try{
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })

    }catch(error){
        console.log(error)
    }
}

export const anteriorPok = () => async (dispatch, getState) => {
    const {previous} = getState().pokemones
    // const siguiente = offset+numero;
    try{
        const res = await axios.get(previous)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })

    }catch(error){
        console.log(error)
    }
}