import { Link } from "react-router-dom";
import products from "../../mocks/products";
import "./item.css";

const product = products;

function Item({ product }) {
  return (
    <div>
      <div>
        <Link to={`/item/${product.id}`}>
          <img className="imagen" src={product.image} alt={product.name} />
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
