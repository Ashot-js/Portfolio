import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./MainLayout.scss";

const MainLayout = () => (
  <div className="MainLayout">
    <Navbar />
    <main className="MainLayout_mainContent">
      <Suspense fallback={<div className="page-loader">Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default MainLayout;
