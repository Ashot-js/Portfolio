// ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router";
// Navigate — компонент для редиректа на другой маршрут
// Outlet — место, куда рендерятся вложенные маршруты (children)

import { useAppSelector } from "../../app/hooks";
// Хук для доступа к Redux state в типизированном виде

const ProtectedRoute = () => {
  // Получаем текущего пользователя из Redux store
  const user = useAppSelector((state) => state.auth.user);

  // Если user есть → рендерим дочерние маршруты через <Outlet />
  // Если user нет → делаем редирект на /auth
  // replace → чтобы не добавлять редирект в историю браузера (чтобы кнопка "Назад" не возвращала на защищённую страницу)
  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
// Экспортируем ProtectedRoute для использования в маршрутах
