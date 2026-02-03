// router.tsx
import { createBrowserRouter } from "react-router";
// Импортируем функцию для создания маршрутизатора (React Router v6)

import { lazy, Suspense } from "react";
// Импортируем lazy для ленивой загрузки страниц и Suspense для fallback при загрузке

import MainLayout from "../components/loyauts/MainLayout";
// Основной лейаут приложения с Navbar и Footer

import AuthLayout from "../components/loyauts/AuthLayout";
// Лейаут для страниц аутентификации (обычно без Navbar)

import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
// Компонент для защиты маршрутов — проверяет авторизацию

import ErrorPage from "../pages/error/ErrorPage";
// Страница для отображения ошибок маршрутизации (404, 500 и т.д.)

// Lazy загрузка страниц — компонент будет загружаться только при переходе на маршрут
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Auth = lazy(() => import("../pages/auth/Auth"));

// Suspense helper с fallback спиннером
// Оборачивает lazy-компонент и показывает "Загрузка..." пока компонент грузится
const withSuspense = (el: React.ReactNode) => (
  <Suspense fallback={<div>Загрузка...</div>}>{el}</Suspense>
);

export const router = createBrowserRouter([
  // 🔴 AUTH — маршруты без Navbar, с Footer
  {
    element: <AuthLayout />, // Лейаут для страниц аутентификации
    children: [
      { path: "/auth", element: withSuspense(<Auth />) },
      // Страница логина/регистрации, обёрнута в Suspense
    ],
  },

  // 🟢 Основное приложение — маршруты с Navbar и Footer
  {
    element: <MainLayout />, // Основной лейаут приложения
    errorElement: <ErrorPage />, // Страница ошибки для всех дочерних маршрутов
    children: [
      {
        element: <ProtectedRoute />,
        // Проверяет, авторизован ли пользователь
        // Если нет → редирект на /auth
        children: [
          { path: "/", element: withSuspense(<Home />) },
          // Главная страница, лениво загружается
          { path: "/about", element: withSuspense(<About />) },
          // Страница "О нас"
          { path: "/contact", element: withSuspense(<Contact />) },
          // Страница контактов
        ],
      },
    ],
  },
]);
