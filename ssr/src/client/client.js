//Startup client
import React from 'react'
import ReactDom from 'react-dom'
import Home from './components/Home'

ReactDom.hydrate(<Home></Home>, document.querySelector('#root'));
