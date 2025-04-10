 import { Link } from "react-router-dom";
 import { useContext } from "react";
 import { Context } from "./Context";

const Cart = () => {
  const valorContexto = useContext(Context);
  
  return (
    <div>
     <Link to="/CarritoItem">
      <img src="/carrito.png" alt="Icono de carrito"/>
      {valorContexto.cantidad}
      </Link>
    </div>
  );
};

export default Cart;
