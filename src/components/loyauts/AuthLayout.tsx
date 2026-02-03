import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import "./AuthLayout.scss";

const AuthLayout = () => {
  return (
    <div className="AuthLayout">
      <main className="AuthLayout_mainContent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
