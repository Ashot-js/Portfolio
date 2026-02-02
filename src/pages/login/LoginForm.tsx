import { useState } from "react";
// Хук useState из React для управления локальным состоянием (например, показать/скрыть пароль)

import { Formik, Form, Field, ErrorMessage } from "formik";
// Импортируем компоненты из Formik:
// Formik - контейнер для формы
// Form - тег формы
// Field - поле ввода
// ErrorMessage - вывод ошибок валидации

import * as Yup from "yup";
// Yup используется для валидации данных формы

import { useAppDispatch } from "../../app/hooks";
// Хук Redux для отправки action (dispatch) в store

import { loginSuccess } from "../../store/authSlice";
// Экшен Redux для сохранения авторизованного пользователя

import { useNavigate } from "react-router";
// Хук для программной навигации между страницами

import { api } from "../../services/api";
// Axios-инстанс для API-запросов

import Button from "../../components/ui/button/Button";
// Кастомная кнопка Button с вариантами стилей

import { Eye, EyeOff } from "lucide-react";
// Иконки показать/скрыть пароль

import "./Login.scss";
// Стили для формы логина

const LoginForm = () => {
  // Основной компонент формы логина

  const [showPassword, setShowPassword] = useState(false);
  // Состояние, показывать ли пароль (true — видимый, false — скрытый)

  const dispatch = useAppDispatch();
  // Получаем функцию dispatch для Redux

  const navigate = useNavigate();
  // Получаем функцию navigate для программной навигации

  // Схема валидации только для логина
  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    // Поле email должно быть валидным email и обязательным
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
    // Поле password должно быть минимум 6 символов и обязательным
  });

  // Обработка submit логина
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const res = await api.get(
        `/users?email=${values.email}&password=${values.password}`,
      );
      // Отправляем GET-запрос на сервер для проверки пользователя

      if (!res.data.length) return alert("Wrong email or password");
      // Если пользователь не найден, показываем alert

      dispatch(loginSuccess(res.data[0]));
      // Сохраняем пользователя в Redux store

      navigate("/");
      // Переходим на главную страницу после успешного логина
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
      // Обработка ошибок при запросе к серверу
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      // Начальные значения формы
      validationSchema={schema}
      // Схема валидации формы
      onSubmit={handleSubmit}
      // Функция при отправке формы
    >
      <Form className="LoginForm">
        {/* Email */}
        <Field name="email" placeholder="Email" />
        {/* Поле ввода email */}
        <ErrorMessage name="email" component="div" className="error" />
        {/* Вывод ошибки валидации email */}

        {/* Password */}
        <div className="password-wrapper">
          {/* Контейнер для поля пароля и иконки показать/скрыть */}
          <Field
            name="password"
            type={showPassword ? "text" : "password"}
            // Если showPassword=true, показываем текст, иначе password
            placeholder="Password"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            // При клике меняем состояние showPassword
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            {/* Иконка меняется в зависимости от состояния showPassword */}
          </span>
        </div>
        <ErrorMessage name="password" component="div" className="error" />
        {/* Вывод ошибки валидации пароля */}

        {/* Submit */}
        <Button type="submit" className="rounded" variant="secondary">
          Login
          {/* Кнопка отправки формы */}
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
// Экспортируем компонент LoginForm для использования в Auth.tsx
