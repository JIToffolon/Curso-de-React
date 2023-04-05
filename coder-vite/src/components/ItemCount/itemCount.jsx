import { useState } from "react";
import "./itemcount.css"

export const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="itemcount">
      <button
        onClick={() => setCounter((prevState) => prevState - 1)}
        disabled={counter < 2}
      >
        {" "}
        -{" "}
      </button>
      <h5>{counter}</h5>
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
