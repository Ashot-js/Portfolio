import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";

import { router } from "./app/router";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} theme="dark" />
  </React.StrictMode>,
);
