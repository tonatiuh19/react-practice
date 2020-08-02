import React from 'react'

const Saludos = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Saludando a {props.persona}, Edad: {props.edad}</h1>
        </div>
    )
}

export default Saludos
