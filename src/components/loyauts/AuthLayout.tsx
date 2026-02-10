import { Outlet } from "react-router";

import "./AuthLayout.scss";

const AuthLayout = () => {
  return (
    <div className="AuthLayout">
      <main className="AuthLayout_mainContent">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
