import Item from "../Item";
import "./itemlist.css";
function ItemList({ products }) {
  return (
    <div className="itemlist">
      <ul>
        {products.map((product, index) => (
          <Item product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
