import React from 'react'

const Listas = () => {
    const arrayInicial = [
        {id: 1, texto : 'tarea 1'},
        {id: 2, texto : 'tarea 2'},
        {id: 3, texto : 'tarea 3'},
    ]
    const [lista, setLista] = React.useState(arrayInicial)

    const agregaElemento = () =>{
        setLista([
            ...lista,
            {id: 4, texto : 'tarea 4'}
        ])
    }
    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((item, index) => (
                <h4 key={index}>Numero: {item.texto}</h4>
                ))
            }
            <button onClick={() => agregaElemento()}>Agregar</button>
        </div>
    )
}

export default Listas
