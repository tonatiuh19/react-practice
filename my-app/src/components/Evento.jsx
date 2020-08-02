import React, {Fragment, useState} from 'react'

const Evento = () => {

    const [texto, setTexto] = useState('Texto en el estado')
    const eventoClick = () =>{
        setTexto('Cambie el texto')
        console.log("aqui ando");
    }

    return (
        <Fragment>
            <hr></hr>
            <h2>{texto}</h2>
            <button onClick={() => eventoClick()}>Click</button>
        </Fragment>
    )
}

export default Evento
