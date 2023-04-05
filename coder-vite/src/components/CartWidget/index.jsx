import "./cartwidget.css";
import { Context } from "../../Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function CartWidget() {
  const { itemsAgregados } = useContext(Context);
  const {cartCantidad} = useContext(Context)
  return (
    <div className="cart">
      <NavLink to="/cart">
        <img src="../Public/Icons/carrito.png" />
      </NavLink>
      <span>{itemsAgregados.length === 0 ? "0" : cartCantidad()} </span>
    </div>
  );
}

export default CartWidget;
