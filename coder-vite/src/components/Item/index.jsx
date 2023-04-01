import { Link } from "react-router-dom";
import "./item.css";

function Item({ product }) {
  console.log(product.image);
  return (
    <div>
      <div>
        <Link to={`/item/${product.id}`}>
          <img
            className="imagen"
            src={`/assets/images/${product.image}`}
            alt={product.name}
          />
        </Link>

        <div>
          <h1>{product.name} </h1>
        </div>
        <div>
          <h2>{product.description}</h2>
        </div>
        <div>
          <h2>${product.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default Item;
