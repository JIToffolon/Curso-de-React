import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ItemRoot from "./routes/item";
import Cart from "./routes/cart";
import ProovedorCustomizado from "./Context/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <dsadsa />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProovedorCustomizado>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ProovedorCustomizado>
);
