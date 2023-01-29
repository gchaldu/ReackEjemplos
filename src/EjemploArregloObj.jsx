import React from 'react'
import { useState } from 'react';

export const EjemploArregloObj = ({ id, nombre }) => {

  const [arregloMedicos, setArregloMedicos] = useState([
    { uid: 1, medico: 'Gabriel' },
    { uid: 2, medico: 'Carolina' },
    { uid: 3, medico: 'Alejandro' },
    { uid: 4, medico: 'Martin' },
  ])




  return (
    <div>
      {/* <h1>Ejemplo Arreglo Objetos</h1>
      <div className='card'>
        <h2><label>Id: {id} </label></h2>
        <p><label>Nombre: {nombre}</label></p>
      </div> */}
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Medico</th>
          </tr>
        </thead>
        <tbody>
          {
            arregloMedicos.map((objeto) => (
            <tr key={objeto.uid}>
              <td>{objeto.uid}</td>
              <td>{objeto.medico}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
