 import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
     <Link to="/CarritoItem">
      <img src="carrito.png" alt="Icono de carrito"/>
      </Link>
    </div>
  );
};

export default Cart;
