import { useContext } from "react";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <NavLink to="/carrito">
      <img src="/carrito.png" alt="Icono de carrito" />
    </NavLink>
  );
};

export default CartWidget;
