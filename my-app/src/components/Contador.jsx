import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)
    const aumentar = () =>{
        setContador(contador+1)
    }
    return (
        <div>
            <h2>Contador</h2>
            <h3>Nuestro numero: {contador}</h3>
            <h4>
                {
                    contador > 2 ? 'Mayor a 2' : 'Menor a 2'
                }
            </h4>
            <button onClick={() => aumentar()}>Aumentar</button>
        </div>
    )
}

export default Contador
