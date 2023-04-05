import "./itemDetail.css";
import { ItemCount } from "../ItemCount/itemCount";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";
const ItemDetail = ({ product }) => {
  const { onAdd } = useContext(Context);
  const [añadir, setAñadir] = useState(0);

  function onAddProduct(counter) {
    setAñadir(counter);
    onAdd(product, counter);
  }

  return (
    <div className="itemdetail">
      <div className="Card">
        <h3>
          {product.name} - ${product.price}
        </h3>

        <img className="imagen" src={`/assets/images/${product.image}`} />
        <h4>{product.description}</h4>

        {añadir == 0 && (
          <ItemCount stock={product.stock} onAdd={onAddProduct} />
        )}

        {añadir >= 1 && (
          <NavLink to={"/cart"}>
            <button>Ir al Carrito</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
