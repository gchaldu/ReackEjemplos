import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { EjemploArreglos } from './EjemploArreglos'
import { EjemploArregloObj } from './EjemploArregloObj'
import {ConsumirApi} from './ConsumirApi' */
import {ApiWP} from './ApiWP'
import '../src/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <EjemploArreglos />
    <EjemploArregloObj/>
    <ConsumirApi/> */}
    <ApiWP />
  </React.StrictMode>,
)
