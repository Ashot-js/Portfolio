import { createBrowserRouter } from "react-router";
import MainLayout from "../components/loyaut/MainLayout";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";

import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import Auth from "../pages/auth/Auth";
import ErrorPage from "../pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />, // <-- обрабатываем ошибки всего Layout
    children: [
      { path: "/auth", element: <Auth /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/contact", element: <Contact /> },
        ],
      },
    ],
  },
]);


