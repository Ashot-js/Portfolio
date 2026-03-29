import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./MainLayout.scss";
import { useAppSelector } from "../../app/hooks";

const MainLayout = () => {
  const isAuthChecked = useAppSelector((state) => state.auth.isAuthChecked);

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

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
