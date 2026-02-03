import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../app/hooks";

const ProtectedRoute = () => {
  const user = useAppSelector((state) => state.auth.user);

  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
// Без логина → нельзя зайти на сайт
