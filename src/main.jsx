import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoutes from "./Pages/PrivateRoutes/PrivateRoutes";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";
import Faqs from "./Pages/Faqs/Faqs";
import { HelmetProvider } from "react-helmet-async";
import Map from "./Pages/Map/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoutes>
            <PropertyDetails></PropertyDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/map",
        element: (
          <PrivateRoutes>
            <Map></Map>
          </PrivateRoutes>
        ),
      },
      {
        path: "/faq",
        element: (
          <PrivateRoutes>
            <Faqs></Faqs>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
