import "./itemDetail.css";
import { ItemCount } from "../ItemCount/itemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const ItemDetail = ({ product }) => {
  const [añadir, setAñadir] = useState(0);

  function onAdd(counter) {
    setAñadir(counter);
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
        {añadir == 0 && <ItemCount stock={product.stock} onAdd={onAdd} />}
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
