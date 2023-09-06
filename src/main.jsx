import React from "react";
import ReactDOM from "react-dom/client";
// import { store } from "./store";
// import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Error404 from "./pages/error404/error404";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/error404",
    element: <Error404 />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
    <RouterProvider router={router} />
  // </Provider>
);
