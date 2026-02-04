import { useState, useEffect } from "react";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../register/RegisterForm";
import "./Auth.scss";
import BgImage from "../../assets/bg.jpg";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [titleText, setTitleText] = useState("Welcome back! Please sign in");
  const [animClass, setAnimClass] = useState("fade-in");
  const [showBanner, setShowBanner] = useState(false); // Для анимации баннера

  useEffect(() => {
    setTimeout(() => setShowBanner(true), 200); // Плавное появление через 0.2с
  }, []);

  const toggleTitle = (login: boolean) => {
    setAnimClass("fade-out");

    setTimeout(() => {
      setTitleText(
        login ? "Welcome back! Please sign in" : "Welcome! Create your account",
      );
      setAnimClass("fade-in");
    }, 500);
  };

  return (
    <div
      className={`AuthPageWrapper ${isLogin ? "login" : "register"} ${showBanner ? "showBanner" : ""}`}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Анимированный баннер сверху */}
      <div className="AnimatedBanner">
        <p>Special Offer or Info Banner</p>
      </div>

      <h1 className={`AuthPageWrapper_title ${animClass}`}>{titleText}</h1>

      <div className={`AuthPage ${isLogin ? "login" : "register"}`}>
        <div className="AuthPage_toggle">
          <div
            className={`segment login ${isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(true);
              toggleTitle(true);
            }}
          >
            Login
          </div>
          <div
            className={`segment register ${!isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(false);
              toggleTitle(false);
            }}
          >
            Register
          </div>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Auth;

// Экспортируем компонент Auth для использования в роутинге или других компонентах
