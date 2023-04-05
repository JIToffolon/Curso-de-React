import { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./itemDetailcontainer.css";
function ItemDetailContainer({}) {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", params.id);

    getDoc(itemRef)
      .then((result) => {
        if (result.exists()) {
          setProduct({ id: result.id, ...result.data() });
        }
      })
      .catch((error) => console.log({ error }));
  }, []);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="itemdetailcontainer">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
