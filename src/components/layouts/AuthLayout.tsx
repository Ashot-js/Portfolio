// Импортируем компонент Outlet из react-router.
// Outlet используется как «место вставки» для вложенных роутов.
import { Outlet } from "react-router";

import "./AuthLayout.scss";

const AuthLayout = () => {
  return (
    // Корневой контейнер layout-а для страниц авторизации.
    <div className="AuthLayout">
      {/* Основная область контента layout-а */}
      <main className="AuthLayout_mainContent">
        {/* Outlet рендерит дочерний роут
            (например Login или Register) */}
        <Outlet />
      </main>
    </div>
  );
};

// Экспортируем компонент AuthLayout по умолчанию,
// чтобы использовать его в конфигурации роутов.
export default AuthLayout;
