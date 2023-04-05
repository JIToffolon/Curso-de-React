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
  return (
    <div className="itemlist">
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
