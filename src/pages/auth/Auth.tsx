import { useState } from "react";
// Хук React для хранения локального состояния компонента

import { Formik, Form, Field, ErrorMessage } from "formik";
// Библиотека Formik: управление формой, полями и ошибками

import * as Yup from "yup";
// Yup — библиотека для валидации данных формы

import { api } from "../../services/api";
// Кастомный axios-инстанс для работы с API

import { useAppDispatch } from "../../app/hooks";
// Хук Redux для dispatch экшенов

import { loginSuccess } from "../../store/authSlice";
// Экшен Redux для сохранения пользователя в store

import { useNavigate } from "react-router";
// Хук для программной навигации между страницами

import "./Auth.scss";
// Стили страницы авторизации

import BgImage from "../../assets/bg.jpg";
// Фоновое изображение страницы

import { Eye, EyeOff } from "lucide-react";
// Иконки показать / скрыть пароль

const Auth = () => {
// Функциональный компонент Auth

  const [isLogin, setIsLogin] = useState(true);
  // Состояние режима формы: true — Login, false — Register

  const [showPassword, setShowPassword] = useState(false);
  // Состояние показа пароля (true — текст, false — точки)

  const dispatch = useAppDispatch();
  // Получаем функцию dispatch для Redux

  const navigate = useNavigate();
  // Получаем функцию навигации

  const schema = Yup.object({
  // Схема валидации формы

    email: Yup.string()
      .email("Invalid email")
      // Проверка на корректный email
      .required("Email required"),
      // Email обязателен

    password: Yup.string()
      .min(6, "Min 6 chars")
      // Минимум 6 символов
      .required("Password required"),
      // Пароль обязателен
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
  // Функция отправки формы (login или register)

    if (isLogin) {
    // Если режим Login

      const res = await api.get(
        `/users?email=${values.email}&password=${values.password}`
      );
      // Запрос пользователя по email и паролю

      if (!res.data.length) return alert("Wrong email or password");
      // Если пользователь не найден — ошибка

      dispatch(loginSuccess(res.data[0]));
      // Сохраняем пользователя в Redux

      navigate("/");
      // Переход на главную страницу

    } else {
    // Если режим Register

      const existing = await api.get(`/users?email=${values.email}`);
      // Проверяем, существует ли пользователь

      if (existing.data.length) return alert("User already exists");
      // Если email занят — ошибка

      const res = await api.post("/users", values);
      // Создаём нового пользователя

      dispatch(loginSuccess(res.data));
      // Сохраняем нового пользователя в Redux

      navigate("/");
      // Переход на главную страницу
    }
  };

  return (
  // JSX-разметка компонента

    <div
      className={`AuthPageWrapper ${isLogin ? "login" : "register"}`}
      // Wrapper с классом login или register

      style={{
        backgroundImage: `url(${BgImage})`,
        // Устанавливаем фоновое изображение

        backgroundSize: "cover",
        // Картинка на весь экран

        backgroundRepeat: "no-repeat",
        // Без повторений

        backgroundPosition: "center",
        // Центрируем изображение
      }}
    >
      <div className={`AuthPage ${isLogin ? "login" : "register"}`}>
      {/* // Контейнер формы с модификатором режима */}

        {/* Единая большая кнопка Login/Register */}
        <div className="AuthPage_toggle">
        {/* // Контейнер переключателя режима */}

          <div
            className={`segment login ${isLogin ? "active" : ""}`}
            // Сегмент Login

            onClick={() => setIsLogin(true)}
            // Переключаемся в режим Login
          >
            Login
            {/* // Текст кнопки */}
          </div>

          <div
            className={`segment register ${!isLogin ? "active" : ""}`}
            // Сегмент Register

            onClick={() => setIsLogin(false)}
            // Переключаемся в режим Register
          >
            Register
            {/* // Текст кнопки */}
          </div>
        </div>

        {/* Форма */}
        <Formik
          initialValues={{ email: "", password: "" }}
          // Начальные значения формы

          validationSchema={schema}
          // Схема валидации Yup

          onSubmit={handleSubmit}
          // Функция отправки формы
        >
          <Form className="AuthPage_form">
          {/* // HTML-форма Formik */}

            <Field name="email" placeholder="Email" />
            {/* // Поле ввода email */}

            <ErrorMessage name="email" component="div" className="error" />
            {/* // Сообщение об ошибке email */}

            <div className="password-wrapper">
            {/* // Контейнер для поля пароля и иконки */}

              <Field
                name="password"
                // Имя поля

                type={showPassword ? "text" : "password"}
                // Тип поля: текст или пароль

                placeholder="Password"
                // Placeholder
              />

              <span
                className="toggle-password"
                // Иконка переключения пароля

                onClick={() => setShowPassword(!showPassword)}
                // Меняем состояние показа пароля
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                {/* // Меняем иконку в зависимости от состояния */}
              </span>
            </div>

            <ErrorMessage name="password" component="div" className="error" />
            {/* // Сообщение об ошибке пароля */}

            <button type="submit" className="submit-btn">
            {/* // Кнопка отправки формы */}

              {isLogin ? "Login" : "Register"}
              {/* // Текст кнопки зависит от режима */}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Auth;
// Экспорт компонента Auth
