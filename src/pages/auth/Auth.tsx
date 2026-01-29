import { useState } from "react";
// Хук useState для хранения состояния компонента

import { Formik, Form, Field, ErrorMessage } from "formik";
// Formik для управления формой, Field для полей, ErrorMessage для отображения ошибок

import * as Yup from "yup";
// Yup для схемы валидации формы

import { api } from "../../services/api";
// Кастомный axios-инстанс для API-запросов

import { useAppDispatch } from "../../app/hooks";
// Хук Redux для dispatch

import { loginSuccess } from "../../store/authSlice";
// Экшен Redux для сохранения пользователя после логина

import { useNavigate } from "react-router";
// Хук для программной навигации между страницами

import "./Auth.scss";
// Стили страницы авторизации

import BgImage from "../../assets/bg.jpg";
// Фоновое изображение страницы

import { Eye, EyeOff } from "lucide-react";
// Иконки показать/скрыть пароль

const Auth = () => {
  // Основной компонент авторизации

  const [isLogin, setIsLogin] = useState(true);
  // Состояние режима формы: true - Login, false - Register

  const [showPassword, setShowPassword] = useState(false);
  // Состояние показа пароля: true - показать, false - скрыть

  const [titleText, setTitleText] = useState(
    "Welcome back! Please sign in"
  );
  // Состояние текста заголовка. По умолчанию для Login

  const [animClass, setAnimClass] = useState("fade-in");
  // Класс анимации текста заголовка: fade-in / fade-out

  const dispatch = useAppDispatch();
  // Получаем функцию dispatch для Redux

  const navigate = useNavigate();
  // Функция навигации между страницами

  const toggleTitle = (login: boolean) => {
    // Функция смены текста заголовка при переключении Login/Register

    setAnimClass("fade-out");
    // Сначала применяем класс fade-out для плавного исчезновения

    setTimeout(() => {
      // Ждём 500 мс (длительность анимации) перед сменой текста

      setTitleText(
        login
          ? "Welcome back! Please sign in"
          // Текст для Login

          : "Welcome! Create your account"
          // Текст для Register (новый заголовок)
      );

      setAnimClass("fade-in");
      // После смены текста применяем fade-in для плавного появления
    }, 500);
  };

  const schema = Yup.object({
    // Схема валидации формы
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
    confirmPassword: Yup.string().when("password", {
      is: () => !isLogin,
      then: (schema) =>
        schema
          .required("Confirm password required")
          .oneOf([Yup.ref("password")], "Passwords must match"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const handleSubmit = async (values: {
    email: string;
    password: string;
    confirmPassword?: string;
  }) => {
    // Функция обработки отправки формы
    if (isLogin) {
      // Если режим Login
      const res = await api.get(
        `/users?email=${values.email}&password=${values.password}`
      );
      if (!res.data.length) return alert("Wrong email or password");
      dispatch(loginSuccess(res.data[0]));
      navigate("/");
    } else {
      // Если режим Register
      const existing = await api.get(`/users?email=${values.email}`);
      if (existing.data.length) return alert("User already exists");
      const res = await api.post("/users", {
        email: values.email,
        password: values.password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    }
  };

  return (
    <div
      className={`AuthPageWrapper ${isLogin ? "login" : "register"}`}
      // Контейнер страницы с модификатором login/register

      style={{
        backgroundImage: `url(${BgImage})`,
        // Фоновое изображение

        backgroundSize: "cover",
        // Картинка на весь контейнер

        backgroundRepeat: "no-repeat",
        // Без повторений

        backgroundPosition: "center",
        // Центрирование изображения
      }}
    >
      <h1 className={`AuthPageWrapper_title ${animClass}`}>
        {titleText}
        {/* Текст заголовка меняется при переключении Login/Register */}
      </h1>

      <div className={`AuthPage ${isLogin ? "login" : "register"}`}>
        {/* Контейнер формы */}

        <div className="AuthPage_toggle">
          {/* Переключатель Login / Register */}

          <div
            className={`segment login ${isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(true);
              toggleTitle(true);
            }}
            // При клике активируем Login и меняем текст заголовка
          >
            Login
          </div>

          <div
            className={`segment register ${!isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(false);
              toggleTitle(false);
            }}
            // При клике активируем Register и меняем текст заголовка
          >
            Register
          </div>
        </div>

        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form className="AuthPage_form">
            {/* Поле email */}
            <Field name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />

            {/* Поле пароля */}
            <div className="password-wrapper">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            <ErrorMessage name="password" component="div" className="error" />

            {/* Поле подтверждения пароля при регистрации */}
            {!isLogin && (
              <>
                <div className="password-wrapper">
                  <Field
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                  />
                  <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </>
            )}

            {/* Кнопка отправки формы */}
            <button type="submit" className="submit-btn">
              {isLogin ? "Login" : "Register"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Auth;
// Экспортируем компонент
