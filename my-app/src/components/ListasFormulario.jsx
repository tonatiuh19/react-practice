import React from 'react'

const ListasFormulario = () => {

    const arrayInicial = []
    const [lista, setLista] = React.useState(arrayInicial)
    return (
        <div>
            <h2>Frutas:</h2>
            {
                lista.map((item, index) => (
                <h4 key={index}>Fruta: {item.texto}, Descripcion: {item.descripcion}</h4>
                ))
            }
        </div>
    )
}

export default ListasFormulario
