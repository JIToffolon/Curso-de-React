import { createContext, useState } from "react";

export const Context = createContext();

function ProovedorCustomizado({ children }) {
  const [itemsAgregados, setItemsAgregados] = useState([]);

  console.log(itemsAgregados);

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

  function removeId(itemId) {}
  function clear() {}

  function enElCarro(product) {
    return itemsAgregados.some(
      (itemsAgregados) => itemsAgregados.id === product.id
    );
  }

  const value = {
    itemsAgregados,
    onAdd,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ProovedorCustomizado;
