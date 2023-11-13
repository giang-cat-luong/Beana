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
import Profile from "./pages/Profile"
import Cart from "./pages/Cart";
import AccountInformation from "./pages/Profile/components/AccountInformation"
import AccountManagement from "./pages/Profile/components/AccountManagement"
import AddressManagement from "./pages/Profile/components/AddressManagement"
import MyOrder from "./pages/Profile/components/MyOrder"
import Wishlist from "./pages/Profile/components/Wishlist"
import Repurchase from "./pages/Profile/components/Repurchase"
import NewAddress from "./pages/Profile/components/AddressManagement/components/NewAddress";
import AddressBook from "./pages/Profile/components/AddressManagement/components/AddressBook";

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
        path: "/scanning-calculation",
        element: <ScanningCalculation />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            index: true, element: <Navigate to="account-management" replace />
          },
          {
            path: "account-info",
            element: <AccountInformation />,
          },
          {
            path: "account-management",
            element: <AccountManagement />,
          },
          {
            path: "address-management",
            element: <AddressManagement />,
            children: [
              {
                index: true, element: <Navigate to="address-book" replace />
              },
              {
                path: "new-address",
                element: <NewAddress />,
              },
              {
                path: "address-book",
                element: <AddressBook />,
              }
            ]
          },
          {
            path: "my-order",
            element: <MyOrder />,
          },
          {
            path: "repurchase",
            element: <Repurchase />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ]
      },


    ],
  },
  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <Error404 />,

  //   children: [
  //     {
  //       index: true, element: <Navigate to="/landingPage" replace />
  //     },
  //     {
  //       path: "/landingPage",
  //       element: <LandingPage />,
  //     },
  //   ],
  // },
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
