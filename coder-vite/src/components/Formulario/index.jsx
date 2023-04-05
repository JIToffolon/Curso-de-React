import { useContext, useState } from "react";
import { Context } from "../../Context";
import { NavLink } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import CartList from "../CartList";
import Modal from "../Modal/index";
import "./formulario.css";



const Formulario = () => {
  const { total, clear, itemsAgregados } = useContext(Context);
  const [success, setSuccess] = useState();
  const [showModal, setShowModal] = useState(false);

  const [order, setOrder] = useState({
    items: itemsAgregados.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
      };
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: total,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    pushData({ ...order, buyer: formData });
  };

  const pushData = async (newOrder) => {
    const db = getFirestore();
    const collectionOrder = collection(db, "orders");
    const orderDoc = await addDoc(collectionOrder, newOrder);
    setSuccess(orderDoc.id);
    clear();
  };

  return (
    <div className="carritoform">
      <h1>CARRITO DE COMPRAS</h1>
      {itemsAgregados.map((product) => {
        return <CartList product={product} key={product.id} data={product} />;
      })}
      <div>
        {total === 0 ? (
          <h2>
            No tenes nada en tu carrito de compras, haz{" "}
            <NavLink to="/">click aquí</NavLink> para comprar algo!!!
          </h2>
        ) : (
          <div className="text">
            <h5>TOTAL: ${total}</h5>
            <button onClick={clear}>Borrar Todo</button>
            <button onClick={() => setShowModal(true)}>Comprar</button>
          </div>
        )}
      </div>
      {showModal && (
        <Modal close={() => setShowModal()}>
          {success ? (
            <>
              <h5>Felicidades su compra fue realizada correctamente</h5>
              <h5> ID de Compra: {success}</h5>
            </>
          ) : (
            <>
              <h5>
                Estás a sólo un paso de terminar tu compra, por favor completá
                los siguentes datos para finalizar.
              </h5>
              <form onSubmit={submitData}>
                <div>
                  <h5>Nombre:</h5>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ingrese Su Nombre"
                    onChange={change}
                    value={formData.name}
                  />
                </div>
                <div>
                  <h5>Teléfono:</h5>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Ingrese Su Telefono"
                    onChange={change}
                    value={formData.phone}
                  />
                </div>
                <div>
                  <h5>Email:</h5>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ingrese Su Email"
                    onChange={change}
                    value={formData.email}
                  />
                </div>
                <div>
                  <h5>Direccion:</h5>
                  <input
                    type="text"
                    name="address"
                    placeholder="Ingrese Su Direccion"
                    onChange={change}
                    value={formData.address}
                  />
                </div>

                <button type="submit"><h5>ENVIAR</h5></button>
              </form>
            </>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Formulario;
