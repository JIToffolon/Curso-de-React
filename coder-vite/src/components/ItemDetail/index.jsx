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
    <div>
      <h2>
        {product.name} - ${product.price}
      </h2>
      <div>
        <img className="imagen" src={product.image} />
        <p>{product.description}</p>
      </div>
      <div>
        {añadir == 0 && (
          <ItemCount stock={product.stock} onAdd={onAddProduct} />
        )}
        <div>
          {añadir >= 1 && (
            <NavLink to={"/cart"}>
              <button>Finalizar Compra</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
