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
    }, 500);
  };

  return (
    <div
      className={`AuthPageWrapper ${isLogin ? "login" : "register"}`}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h1 className={`AuthPageWrapper_title ${animClass}`}>{titleText}</h1>

      <div className="AuthPage">
        <div className="AuthPage_toggle">
          <div
            className={`segment ${isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(true);
              toggleTitle(true);
            }}
          >
            Login
          </div>
          <div
            className={`segment ${!isLogin ? "active" : ""}`}
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
