import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import User from './components/User';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h2>Aqui ando</h2>
        <div className="btn-group" >
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
        </div>
        <hr></hr>
        <Switch>
          <Route path="/nosotros/:id">
            <User></User>
          </Route>
          <Router path="/contacto">
            <Contacto></Contacto>
          </Router>
          <Router path="/nosotros">
            <Nosotros></Nosotros>
          </Router>
          <Router path="/" exact>
            <Inicio></Inicio>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
