import { useContext } from "react";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <NavLink to="/carrito">
        <img src="/carrito.png" alt="Icono de carrito" />
      </NavLink>
    </div>
  );
};

export default CartWidget;
