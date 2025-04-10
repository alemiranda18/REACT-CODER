import { Link } from "react-router-dom";

const ItemProductos = (props) => {
  return (
    <div className="itemProductosIndivuales"> 
        <h3>{props.producto.title}</h3>
        <img
          src={props.producto.image}
          alt="imagen del producto"
          className="imgProducto"
        />
        <h4>{props.producto.price}</h4>
        <Link to={`/productos/${props.producto.id}`}>DETALLES</Link>
    </div>
  )
}

export default ItemProductos;