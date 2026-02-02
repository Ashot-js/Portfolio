import { useState } from "react";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../register/RegisterForm";
import "./Auth.scss";
import BgImage from "../../assets/bg.jpg";

const Auth = () => {
  // Основной компонент страницы авторизации

  const [isLogin, setIsLogin] = useState(true);
  // Состояние переключения между Login и Register
  // true — показываем форму логина, false — форму регистрации

  const [titleText, setTitleText] = useState("Welcome back! Please sign in");
  // Состояние текста заголовка страницы, меняется при переключении формы

  const [animClass, setAnimClass] = useState("fade-in");
  // Состояние класса анимации для плавного появления/исчезновения текста заголовка

  const toggleTitle = (login: boolean) => {
    // Функция смены текста заголовка при переключении Login/Register
    setAnimClass("fade-out");
    // Сначала применяем класс fade-out, чтобы текст исчезал плавно

    setTimeout(() => {
      // Ждём 500 мс перед сменой текста, чтобы анимация успела проиграться

      setTitleText(
        login ? "Welcome back! Please sign in" : "Welcome! Create your account",
        // Меняем текст заголовка в зависимости от выбранной формы
      );

      setAnimClass("fade-in");
      // После смены текста применяем fade-in, чтобы новый заголовок плавно появился
    }, 500);
  };

  return (
    <div
      className={`AuthPageWrapper ${isLogin ? "login" : "register"}`}
      // Основной контейнер страницы
      // Класс login/register нужен для различного фонового стиля и цвета псевдоэлемента ::before
      style={{ backgroundImage: `url(${BgImage})` }}
      // Устанавливаем фон через inline-стиль
    >
      <h1 className={`AuthPageWrapper_title ${animClass}`}>
        {titleText}
        {/* Заголовок страницы с анимацией fade-in / fade-out */}
      </h1>

      <div className={`AuthPage ${isLogin ? "login" : "register"}`}>
        {/* Контейнер для формы + переключателя Login/Register */}

        <div className="AuthPage_toggle">
          {/* Переключатель между Login и Register */}

          <div
            className={`segment login ${isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(true);
              toggleTitle(true);
              // При клике на Login: активируем состояние isLogin и меняем заголовок
            }}
          >
            Login
          </div>

          <div
            className={`segment register ${!isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(false);
              toggleTitle(false);
              // При клике на Register: активируем состояние isLogin=false и меняем заголовок
            }}
          >
            Register
          </div>
        </div>

        {/* Показываем нужную форму в зависимости от состояния isLogin */}
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Auth;
// Экспортируем компонент Auth для использования в роутинге или других компонентах
