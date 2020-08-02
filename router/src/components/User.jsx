import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    
    
    const {id} = useParams()
    const[equipo, setEquipo] = React.useState([]);

    React.useEffect(() => {
        //console.log('Use effect')
        
        obtenerDatos()
    }, [])


    const obtenerDatos = async () => {
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const users = await data.json()
        setEquipo(users)
    }

    return (
        <div>
            <h2>{equipo.name}</h2>
        </div>
    )
}

export default User
