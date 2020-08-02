import React from 'react';
import Saludos from './componentes/Saludos';
import Comentario from './componentes/Comentario';

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde 0</h1>
      <Saludos persona='Ignacio' edad={30}></Saludos>
      <Saludos persona='Pedro' edad={29}></Saludos>
      <Saludos persona='Juan' edad={28}></Saludos>
      <hr></hr>
      <Comentario urlImagen='https://picsum.photos/64' persona='Luis' texto='gregre'></Comentario>
      <Comentario urlImagen='https://picsum.photos/64' persona='Carlos' texto='regre'></Comentario>
      <Comentario urlImagen='https://picsum.photos/64' persona='Juan' texto='gresdfgre'></Comentario>
    </div>
  );
}

export default App;
