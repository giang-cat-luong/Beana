import React from "react";
import ReactDOM from "react-dom/client";
// import { store } from "./store";
// import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import ProductDetail from "./pages/ProductDetail";
import SkincareTips from "./pages/SkincareTips";
import ScanningFace from "./pages/ScanningFace";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login props="" />,
  },
  {
    path: "/signup",
    element: <Login props="sign-up-mode" />,
  },
  {
    path: "/error404",
    element: <Error404 />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,

    children: [
      {
        index: true, element: <Navigate to="/landingPage" replace />
      },
      {
        path: "/landingPage",
        element: <LandingPage />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product",
        element: <ProductDetail />,
      },
      {
        path: "/skincare-tips",
        element: <SkincareTips />,
      },
      {
        path: "/scanning-face",
        element: <ScanningFace />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <RouterProvider router={router} />
  // </Provider>
);
