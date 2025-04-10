import React from 'react'
import { useContext } from 'react'
import  {Context}  from "./Context"


const CarritoItem = () => {
  const valorContexto = useContext(Context);
  
return (
  <div>
  <h2>carrito</h2>
  <h3>cantidad de productos: {valorContexto.cantidad}</h3>
  <h3>total: {valorContexto.total}</h3>
  <h3>productos:</h3>
  <ul>
      {valorContexto.carrito.map((item, index) => {
        return(
          <li key={index}>
             <p>{item.title} - unidad: ${item.price} </p>
          </li>
        )
      } )}

  </ul>

  <button onClick={valorContexto.vaciarCarrito}> vaciar carrito</button>    
  </div>
  )
}
export default CarritoItem