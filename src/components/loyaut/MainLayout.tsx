import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Navbar />
      <main className="MainLayout_mainContent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

