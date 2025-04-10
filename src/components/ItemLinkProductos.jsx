import React, {useContext, useEffect, useState } from 'react'
import  {Context}  from "./Context"
import { useParams } from 'react-router-dom' 


const ItemLinkProductos = () => {

const params = useParams()
const valor = useContext(Context)

//estados
const [producto, setProducto] = useState([])
useEffect(() => {
   fetch ('/productos.json')
   .then((res) => {
     return res.json()
   })
    .then((res) => {
      const resultado = res.find ((item)=> {
         if(item.id == params.id){
            return item
         }
      }) 
   setProducto(resultado)
   });
},[])


//eventos
const click = () => {
   valor.agregarProd(producto)
}

return( 
<div className="itemLinkIndivuales"> 
   <h3>{producto.title}</h3>
   <img  src={producto.image} alt="imagen del producto" className="imgProdIndividual"/>
   <h4>{producto.price}</h4>
   <p>{producto.description}</p> 
<button onClick={click}> agregar a carrito</button>
</div> 
   )
}



export default ItemLinkProductos