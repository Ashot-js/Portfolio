import { useState } from "react";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../register/RegisterForm";
import "./Auth.scss";
import BgImage from "../../assets/bg.jpg";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [titleText, setTitleText] = useState("Welcome back! Please sign in");
  const [animClass, setAnimClass] = useState("fade-in");

  const toggleTitle = (login: boolean) => {
    setAnimClass("fade-out");

    setTimeout(() => {
      setTitleText(
        login ? "Welcome back! Please sign in" : "Welcome! Create your account",
      );
      setAnimClass("fade-in");
    }, 600);
  };

  const handleToggle = (login: boolean) => {
    if (login === isLogin) return;

    setIsLogin(login);
    toggleTitle(login);
  };

  return (
    <div
      className={`AuthPageWrapper ${isLogin ? "login" : "register"}`}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h1 className={`AuthPageWrapper_title ${animClass}`}>{titleText}</h1>

      <div className="AuthPage">
        <div className="AuthPage_toggle" role="tablist">
          <div
            className={`segment ${isLogin ? "active" : ""}`}
            role="tab"
            aria-selected={isLogin}
            onClick={() => handleToggle(true)}
          >
            Login
          </div>

          <div
            className={`segment ${!isLogin ? "active" : ""}`}
            role="tab"
            aria-selected={!isLogin}
            onClick={() => handleToggle(false)}
          >
            Register
          </div>
        </div>

        {isLogin ? <LoginForm key="login" /> : <RegisterForm key="register" />}
      </div>
    </div>
  );
};

export default Auth;
