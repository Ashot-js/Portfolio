import { useState, useRef, useEffect } from "react";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../register/RegisterForm";
import "./Auth.scss";
import type { BrowserTimer } from "../../types/global";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [titleText, setTitleText] = useState("Welcome back! Please sign in");
  const [animClass, setAnimClass] = useState("fade-in");

  const timeoutRef = useRef<BrowserTimer>(null);

  const toggleTitle = (login: boolean) => {
    setAnimClass("fade-out");

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setTitleText(
        login ? "Welcome back! Please sign in" : "Welcome! Create your account",
      );
      setAnimClass("fade-in");
      timeoutRef.current = null;
    }, 600);
  };

  const handleToggle = (login: boolean) => {
    if (login === isLogin) return;
    setIsLogin(login);
    toggleTitle(login);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={`AuthPageWrapper ${isLogin ? "login" : "register"}`}>
      <h1 className={`AuthPageWrapper_title ${animClass}`}>{titleText}</h1>

      <div className="AuthPage">
        <div className="AuthPage_toggle" role="tablist">
          <button
            className={`segment ${isLogin ? "active" : ""}`}
            role="tab"
            aria-selected={isLogin}
            onClick={() => handleToggle(true)}
          >
            Login
          </button>

          <button
            className={`segment ${!isLogin ? "active" : ""}`}
            role="tab"
            aria-selected={!isLogin}
            onClick={() => handleToggle(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? <LoginForm key="login" /> : <RegisterForm key="register" />}
      </div>
    </div>
  );
};

export default Auth;
