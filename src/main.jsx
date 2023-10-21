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
import ScanningResult from "./pages/ScanningFace/components/QuestionQA/ScanningResult";
import ScanningCamera from "./pages/ScanningCamera/ScanningCamera";
import Cart from "./pages/Cart";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Checkout from "./pages/Checkout/Checkout";


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
        path: "/product/:id",
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
      {
        path: "/scanning-result",
        element: <ScanningResult />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },


    ],
  },
  {
    path: "/scanning-camera",
    element: <ScanningCamera />,
  },

]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5000 } },
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
)
