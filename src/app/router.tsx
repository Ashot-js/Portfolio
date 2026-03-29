import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Contact = lazy(() => import("../pages/contact/Contact"));

const withSuspense = (el: React.ReactNode) => (
  <Suspense fallback={<div className="page-loader">Loading...</div>}>
    {el}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: withSuspense(<Home />) },
      { path: "/about", element: withSuspense(<About />) },
      { path: "/projects", element: withSuspense(<Projects />) },
      { path: "/contact", element: withSuspense(<Contact />) },
    ],
  },
]);
