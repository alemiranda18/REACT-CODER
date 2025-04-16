import React, {useContext, useEffect, useState } from 'react'
import  {Context}  from "./Context"
import { useParams } from 'react-router-dom' 
import { app } from "../firebaseConfig";
import { collection,getFirestore,getDocs,query,where } from "firebase/firestore";


const ItemLinkProductos = () => {
const params = useParams()
const valor = useContext(Context)
const db = getFirestore(app);
const productosCollection = collection(db, "productos");


const [producto, setProducto] = useState([])

useEffect(() => {
   const convertir = parseInt(params.id)
   const miFiltro = query(productosCollection, where("id", "==", convertir)) 
   const filtrar = getDocs(miFiltro)
    
   .then((respuesta)=>{
      const productoFiltrado = respuesta.docs.map((doc) => {
        return doc.data()
      })
      setProducto(productoFiltrado [0])
    })
    .catch(()=> {
      console.log("salio mal")
    })

},[params.id]);


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