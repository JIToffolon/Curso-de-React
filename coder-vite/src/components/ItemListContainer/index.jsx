import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ categoriaRuta, paramsId }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    if (categoriaRuta) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", paramsId)
      );
      getDocs(queryResult)
        .then((result) => {
          const docs = result.docs;
          setProducts(
            docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => console.log({ error }));
    } else {
      getDocs(itemsCollection)
        .then((result) => {
          const docs = result.docs;
          setProducts(
            docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => console.log({ error }));
    }
  }, [paramsId]);
  /*useEffect(() => {
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

  console.log({ products }); */
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
