import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

function ItemRoot() {
  const params = useParams();
  return (
    <div>
      <NavBar />
      <ItemDetailContainer detalleDelProducto={params.id} />
    </div>
  );
}

export default ItemRoot;
