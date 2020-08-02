import React from 'react';
import shortid from 'shortid';



function App() {

  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [edicion, setEdicion] = React.useState(false)
  const [id, setid] = React.useState('')
  const [error, setError] = React.useState(0)

  const agregarTarea = e => {
    e.preventDefault()

    if(!tarea.trim()){
      setError(1)
      return
    }
   

    setTareas([
      ...tareas,
      {id: shortid.generate(), nombreTarea: tarea}
    ])
    setTarea('')
    setError(0)
  }

  const eliminarTarea = (id) =>{
    console.log(id)
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }
  

  const editarTarea = (item) =>{
    setEdicion(true)
    setTarea(item.nombreTarea)
    setid(item.id)
  }

  const edicionTarea = e => {
    e.preventDefault()

    if(!tarea.trim()){
      setError(1)
      return
    }

    const arrayEditado = tareas.map(item => item.id == id ? {id:id, nombreTarea:tarea} : item)

    setTareas(arrayEditado)
    setEdicion(false)
    setTarea('')
    setid('')
    setError(0)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD APP</h1>
      <hr/>
      <div className="row">

        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {
              tareas.length == 0 ? 
              (<li className="list-group-item">No hay tareas</li>) 
              : 
              ( tareas.map((item, index) => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.nombreTarea}</span>
                  <button 
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={() =>eliminarTarea(item.id)}
                  >Eliminar</button>
                  <button 
                    className="btn btn-sm btn-warning float-right"
                    onClick={() =>editarTarea(item)}
                  >Editar</button>
                </li>
              )))


            }


          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">
            {
              edicion ? 'Editar Tarea' : 'Agregar Tarea'
            }
          </h4>
          <form onSubmit={edicion ? edicionTarea : agregarTarea}>
            {
              error == 1 ? <span className="text-danger">El campo esta vacio</span> : null
            }

            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
              onChange={ (e) => setTarea(e.target.value)}
              value={tarea}
            />
            {
              edicion ? (<button className="btn btn-warning btn-block" type="submit">Editar</button>) : (<button className="btn btn-dark btn-block" type="submit">Agregar</button>)
            }
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
