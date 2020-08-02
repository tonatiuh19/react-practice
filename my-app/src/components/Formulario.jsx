import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');

    const arrayInicial = []
    const [lista, setLista] = React.useState(arrayInicial)

    const guardarDatos = (e) =>{
        e.preventDefault()
        
        if(!fruta.trim()){
            console.log("vacio fruta")
            return
        }

        if(!descripcion.trim()){
            console.log("vacio fruta")
            return
        }

        setLista([
            ...lista,
            {fruta : fruta, descripcion: descripcion}
            
        ])

        console.log("Procesando..."+ fruta + descripcion)
        console.log(lista)
        e.target.reset()
        setFruta('')
        setDescripcion('')
    }
    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos}>
                <input type="text" placeholder="Ingresa la fruta" className="form-control mb-2" onChange={(e) => setFruta(e.target.value)}></input>
                <input type="text" placeholder="Ingresa la descripcion" className="form-control mb-2" onChange={(e) => setDescripcion(e.target.value)}></input>
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <hr></hr>
            <h2>Frutas:</h2>
            <ul>
            {
                lista.map((item, index) => (
                <li key={index}>Fruta: {item.fruta}, Descripcion: {item.descripcion}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Formulario
