import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import CartList from "../CartList";
import { NavLink } from "react-router-dom";
import "./cartlistcontainer.css"

export default function CartListContainer() {
  const { itemsAgregados } = useContext(Context);
  const { totalPrice } = useContext(Context);
  const { total } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const { handleClearCart } = useContext(Context);

  const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const getProducts = async () => {
    try {
      await fakePromise();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    totalPrice();
  }, [itemsAgregados]);

  return (
    <>
      <div className="Cartlistcontainer">
        {loading ? (
          <>
            <h3>CARGANDO...</h3>
          </>
        ) : (
          <>
            {itemsAgregados.length >= 1 ? <h3>DETALLE DEL CARRITO</h3> : ""}
            {itemsAgregados.map((product) => (
              <CartList key={product.id} product={product} />
            ))}
            {itemsAgregados.length >= 1 ? (
              <>
                <div>
                  <h3>TOTAL DE LA COMPRA: $ {total}</h3>
                </div>

                <div className="botones">
                  <button onClick={() => handleClearCart()}>
                    Vaciar Carrito
                  </button>
                  <NavLink to={"/"}>
                    <button>Seguir Comprando</button>
                  </NavLink>
                  <div>
                    <NavLink to={"/checkout"}>
                      <button>Ir a pagar</button>
                    </NavLink>
                  </div>
                </div>
              </>
            ) : (
              <div className="mensaje">
                <h3>LO SIENTO</h3>
                <h3>
                  El Carrito está vacio! - <strong>¡Agrega Productos!</strong>
                </h3>
                <NavLink to={"/"}>
                  <button>VER PRODUCTOS</button>
                </NavLink>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
