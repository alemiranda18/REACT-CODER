import { Link } from "react-router-dom";
import {CarritoItem} from ".CarritoItem";

const CartWidget = () => {
  return (
    <div>
      <Link to="/CarritoItem">
      <img src="carrito.png" alt="Icono de carrito"/>
      </Link>
      <CarritoItem />
    </div>
  );
};

export default CartWidget;
