import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemProductos from "./ItemProductos";

export const ItemListConteiner = () => {
  const [resultado, setResultado] = useState([]);
  const params = useParams();
  
  useEffect(() => {
    fetch(params.id === undefined ? "/productos.json" : `/${params.id}.json`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setResultado(res);
      });
  }, [params.id]);

  return (
    <div className="itemProductos">
      {resultado.map((producto) => {
        return (
        <ItemProductos
        key={producto.id}
          producto={producto}
          />
        )
      })}
    </div>
  );
};
export default ItemListConteiner;
