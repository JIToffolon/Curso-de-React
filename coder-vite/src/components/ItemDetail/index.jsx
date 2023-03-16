import "./itemDetail.css";
const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>
        {product.name} - ${product.price}
      </h2>
      <div>
        <img className="imagen" src={product.image} />
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
