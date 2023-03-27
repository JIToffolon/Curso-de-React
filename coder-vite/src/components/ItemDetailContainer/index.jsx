import { useContext, useEffect, useState } from "react";
import products from "../../mocks/products";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer({ detalleDelProducto }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productoDetallado = products.find(
      (product) => product.id == detalleDelProducto
    );
    setProduct(productoDetallado);
  }, [detalleDelProducto]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
