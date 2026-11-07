import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Contact = lazy(() => import("../pages/contact/Contact"));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
