import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

function ItemRoot() {
  const params = useParams();

  return (
    <div>
      <NavBar />
      <ItemDetailContainer detalleDelProducto={params.id} />
      <Footer/>
    </div>
  );
}

export default ItemRoot;
