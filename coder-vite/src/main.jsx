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
  apiKey: "AIzaSyAkUGiW_TBO6FaSjH0w8V46VwCxweF2AQI",
  authDomain: "curso-de-react-ecommerce.firebaseapp.com",
  projectId: "curso-de-react-ecommerce",
  storageBucket: "curso-de-react-ecommerce.appspot.com",
  messagingSenderId: "326289214740",
  appId: "1:326289214740:web:22dadb700a437956a18601",
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
