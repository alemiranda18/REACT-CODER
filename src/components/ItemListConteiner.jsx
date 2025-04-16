import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemProductos from "./ItemProductos";
import { app } from "../firebaseConfig";
import { collection, getDocs, getFirestore, query,where } from "firebase/firestore";

const ItemListConteiner = () => {
  const [resultado, setResultado] = useState([]);
  const params = useParams();
 

  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");
    
    
    let  filtrar ;
    if (params.id === undefined) {
       filtrar = getDocs(productosCollection)
    }
    else {
      const miFiltro = query(productosCollection, where("category", "==", params.id)) 
      filtrar = getDocs(miFiltro)
    }
      
    filtrar
          .then((respuesta)=>{
            setResultado(respuesta.docs.map((doc) => {
              return doc.data()
            }))
          })
          .catch(()=> {
            console.log("salio mal")
          })
  },[params.id]);  
    
  return (
    <div className="itemProductos">
      {resultado.map((producto) => {
        return (
          <ItemProductos
            key={producto.id}
            producto={producto}
          />
        );
      })}
    </div>
  );
};

export default ItemListConteiner;
