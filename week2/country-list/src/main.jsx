import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Country from "./pages/Country";
import DetailCountry from "./pages/DetailCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Country />,
  },
  {
    path: "/country-detail",
    element: <DetailCountry />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
