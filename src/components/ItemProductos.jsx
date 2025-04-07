import { NavLink } from "react-router-dom";

const ItemProductos = (props) => {
  return (
    <article className="itemProductosIndivuales"> 
        <h3>{props.producto.title}</h3>
        <img
          src={props.producto.image}
          alt="imagen del producto"
          className="imgProducto"
        />
        <h4>{props.producto.price}</h4>
        <NavLink to={`/producto/${props.producto.id}`}>DETALLES</NavLink>
    </article>
  )
}

export default ItemProductos;