import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const ItemListConteiner = () => {
  const [resultado, setResultado] = useState([]);
  /* const params = useParams(); */
  useEffect(() => {
    fetch("/productos.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setResultado(res);
      });
  }, []);
  return (
    <div className="itemProductos">
      {resultado.map((producto) => {
        return (
          <article className="itemProductosIndivuales">
            <h3>{producto.title}</h3>
            <h4>{producto.price}</h4>
            <img
              src={producto.thumbnail}
              alt="imagen del producto"
              className="imgProducto"
            />
          </article>
        );
      })}
    </div>
  );
};
export default ItemListConteiner;
