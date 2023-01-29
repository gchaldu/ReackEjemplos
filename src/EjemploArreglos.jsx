import React from 'react'
import { useState } from 'react'
import { EjemploArregloObj } from './EjemploArregloObj'

export const EjemploArreglos = () => {

    /**EJEMPLO 1 DE ARREGLOS */
    const [arreglo, setArreglo] = useState(['second', 'tercero'])

    const newArreglo = () => {
        setArreglo([...arreglo, 'pepe']);
    }

    return (
        <>
            <h1>EjemploArreglos</h1>       
            <div className="container">
                <div className="row">
                    <button onClick={newArreglo} className='btn btn-primary'>Agregar elemento</button>
                </div>            
                    {
                        arreglo.map((numero)=> (
                            <div className="row mt-2" key={numero}>
                            <label> {numero} </label>
                            </div>
                        ))          
                    }                
                
            </div>        
        </>

    )
}
