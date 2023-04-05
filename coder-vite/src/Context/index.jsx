import { createContext, useState } from "react";

export const Context = createContext();

function ProovedorCustomizado({ children }) {
  const [itemsAgregados, setItemsAgregados] = useState([]);
  const [total, setTotal] = useState(0);

  const onAdd = (product, cantidad) => {
    const itemYaAgregado = enElCarro(product);

    if (itemYaAgregado) {
      const productoAmodificar = itemsAgregados.find(
        (itemsAgregados) => itemsAgregados.id === product.id
      );
      const productoModificado = {
        ...productoAmodificar,
        cantidad: productoAmodificar.cantidad + cantidad,
      };

      setItemsAgregados((prevState) =>
        prevState.map((itemsAgregados) =>
          itemsAgregados.id === product.id ? productoModificado : itemsAgregados
        )
      );
    } else {
      setItemsAgregados((prevState) =>
        prevState.concat({ ...product, cantidad })
      );
    }
  };

  function enElCarro(product) {
    return itemsAgregados.some(
      (itemsAgregados) => itemsAgregados.id === product.id
    );
  }

  // FUNCION ELIMINAR PRODUCTOS DEL CARRITO
  const deleteProduct = (id) => {
    const find = itemsAgregados.filter((item) => item.id !== id);
    setItemsAgregados(find);
  };

  // FUNCION VACIAR CARRITO
  const clearCart = () => {
    setItemsAgregados([]);
  };

  // FUNCION PARA CALCULAR TOTAL DEL CARRITO

  const totalPrice = () => {
    const acc = itemsAgregados.reduce(
      (total, producto) => total + producto.cantidad * producto.price,
      0
    );
    setTotal(acc);
  };

  const cartCantidad = () => {
    return itemsAgregados.reduce((acc, prod) => (acc += prod.cantidad), 0);
  };

  const handleClearCart = () => {
    const confirmClear = window.confirm(
      "¿Está seguro que desea vaciar el carrito?"
    );
    if (confirmClear) {
      clearCart();
    }
  };

  const clear = () => {
    setItemsAgregados([]);
    totalPrice(0);
    cartCantidad(0);
  };


  const value = {
    itemsAgregados,
    onAdd,
    cartCantidad,
    deleteProduct,
    totalPrice,
    clearCart,
    total,
    handleClearCart,
    clear,
    
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ProovedorCustomizado;
