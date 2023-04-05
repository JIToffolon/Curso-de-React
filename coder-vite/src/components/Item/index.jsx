import { Link } from "react-router-dom";
import "./item.css";
import {ItemCount} from "../ItemCount/itemCount";
import { useState,useContext } from "react";
import { Context } from "../../Context";
import { NavLink } from "react-router-dom";

function Item({ product }) {
  console.log(product.image);
  const { onAdd } = useContext(Context);
  const [añadir, setAñadir] = useState(0);

  function onAddProduct(counter) {
    setAñadir(counter);
    onAdd(product, counter);
  }
  return (
    <div className="item">
      <div className="card">
        <Link to={`/item/${product.id}`}>
          <img
            className="imagen"
            src={`/assets/images/${product.image}`}
            alt={product.name}
          />
        </Link>

        <h3>{product.name} </h3>

        <h4>${product.price}</h4>
        <Link to={`/item/${product.id}`}>
          <button>Ver detalle</button>{" "}
        </Link>
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
}

export default Item;
