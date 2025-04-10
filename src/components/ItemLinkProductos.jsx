import React, {useContext, useEffect, useState } from 'react'
import  {Context}  from "./Context"
import { useParams } from 'react-router-dom' 
import { app } from "../firebaseConfig";
import { addDoc,collection,getFirestore } from "firebase/firestore";


const ItemLinkProductos = () => {

const params = useParams()
const valor = useContext(Context)

const handleclick = (e) => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");
    const query = addDoc(productosCollection, {
      "category": "Hombres",
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "id": 2,
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "price": 22.3,
      "title": "Mens Casual Premium Slim Fit T-Shirts "
    })
  }


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
<button onClick={handleclick}>subir a db</button>

</div> 
   )
}



export default ItemLinkProductos