import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";
import Footer from "../components/footer"

function Root() {
  const params = useParams();
  const categoriaRuta = Boolean(params.id);

  return (
    <div>
      <NavBar />
      <ItemListContainer categoriaRuta={categoriaRuta} paramsId={params.id} />
      <Footer/>
      
    </div>
  );
}

export default Root;
