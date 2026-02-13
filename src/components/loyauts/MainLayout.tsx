// Импортируем компонент Outlet из react-router.
// Он используется для отображения вложенных страниц (роутов).
import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./MainLayout.scss";

const MainLayout = () => {
  // Возвращаем JSX-разметку layout-а.
  return (
    // Корневой контейнер layout-а основного сайта.
    <div className="MainLayout">
      {/* Верхняя навигационная панель */}
      <Navbar />

      {/* Основная область контента страниц */}
      <main className="MainLayout_mainContent">
        {/* Outlet рендерит текущий вложенный роут
            (Home, About, Contact и т.д.) */}
        <Outlet />
      </main>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
};

// Экспортируем MainLayout по умолчанию,
// чтобы использовать его в системе маршрутизации.
export default MainLayout;
