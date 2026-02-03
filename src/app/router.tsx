import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";

import MainLayout from "../components/loyauts/MainLayout";
import AuthLayout from "../components/loyauts/AuthLayout";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import ErrorPage from "../pages/error/ErrorPage";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Auth = lazy(() => import("../pages/auth/Auth"));

// Suspense helper
const withSuspense = (el: React.ReactNode) => (
  <Suspense fallback={<div>Loading...</div>}>{el}</Suspense>
);

export const router = createBrowserRouter([
  // 🔴 AUTH — без Navbar, с Footer
  {
    element: <AuthLayout />,
    children: [{ path: "/auth", element: withSuspense(<Auth />) }],
  },

  // 🟢 Основное приложение — с Navbar + Footer
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/", element: withSuspense(<Home />) },
          { path: "/about", element: withSuspense(<About />) },
          { path: "/contact", element: withSuspense(<Contact />) },
        ],
      },
    ],
  },
]);
