import { useState } from "react";

export const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <button
        onClick={() => setCounter((prevState) => prevState - 1)}
        disabled={counter < 2}
      >
        {" "}
        -{" "}
      </button>
      <p>{counter}</p>
      <button
        onClick={() => setCounter((prevState) => prevState + 1)}
        disabled={counter === stock}
      >
        {" "}
        +{" "}
      </button>
      <div>
        <button onClick={() => onAdd(counter)}>Añadir al carrito</button>
      </div>
    </div>
  );
};
