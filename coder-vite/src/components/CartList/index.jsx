import { useContext } from "react";
import { Context } from "../../Context";
import "./cartlist.css"

function CartList({ product }) {
  const { deleteProduct } = useContext(Context);
  const { name, image, price, cantidad } = product;
  return (
    <div className="cartlist">
      <div className="Card">
      <img className="imagen" src={`/assets/images/${image}`} />
      <h4>
        PRODUCTO:<p>{name}</p>
      </h4>
      <h4>
        CANTIDAD:<p> {cantidad}</p>
      </h4>
      <h4>
        PRECIO: $<p> {price}</p>
      </h4>
      <h4>
        SUBTOTAL: $<p> {price * cantidad}</p>
      </h4>

      <button onClick={() => deleteProduct(product.id)}>Borrar Producto</button>
      </div>
    </div>
  );
}

export default CartList;
