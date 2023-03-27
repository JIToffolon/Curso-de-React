import "./cartwidget.css";
import { Context } from "../../Context";
import { useContext } from "react";

function CartWidget() {
  const { itemsAgregados } = useContext(Context);
  return (
    <div className="cart">
      <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" />
      <span>{itemsAgregados.length} </span>
    </div>
  );
}

export default CartWidget;
