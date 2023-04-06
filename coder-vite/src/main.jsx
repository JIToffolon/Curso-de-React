import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ItemRoot from "./routes/item";
import Cart from "./routes/cart";
import Checkout from "./routes/checkout";
import ProovedorCustomizado from "./Context/index";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.DEV.REACT_APP_apiKey,
  authDomain: import.meta.env.DEV.REACT_APP_authDomain,
  projectId: import.meta.env.VITE_REACT_APP_project,
  storageBucket: import.meta.env.DEV.REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.DEV.REACT_APP_messagingSenderId,
  appId: import.meta.env.DEV.REACT_APP_appId,
};

initializeApp(firebaseConfig);

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
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProovedorCustomizado>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ProovedorCustomizado>
);
