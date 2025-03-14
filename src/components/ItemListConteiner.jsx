import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const ItemListConteiner = () => {
  const [resultado, setResultado] = useState([]);
  const params = useParams();
  console.log(params)
  
  
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
          <article className="itemProductosIndivuales">
            <h3>{producto.Producto}</h3>
            <img
              src={producto.imgProducto}
              alt="imagen del producto"
              className="imgProducto"
            />
            <h4>{producto.Precio}</h4>
            <NavLink to="./itemLink" className="itemLink">
              DETALLES
            </NavLink>
          </article>
        );
      })}
    </div>
  );
};
export default ItemListConteiner;
