import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import ItemList from "../ItemList";

function ItemListContainer({ categoriaRuta, paramsId }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 2000)
    );
    productsPromise
      .then((response) => {
        if (categoriaRuta) {
          const productoFiltrado = response.filter(
            (product) => product.category === paramsId
          );

          setProducts(productoFiltrado);
        } else {
          setProducts(response);
        }
      })

      .catch((err) => console.log(err));
  }, [paramsId]);

  console.log({ products });
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
