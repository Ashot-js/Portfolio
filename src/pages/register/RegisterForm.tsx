import { useState } from "react";
// Хук useState из React для локального состояния (например, показать/скрыть пароль)

import { Formik, Form, Field, ErrorMessage } from "formik";
// Импорт компонентов Formik:
// Formik - контейнер для формы
// Form - тег формы
// Field - поле ввода
// ErrorMessage - вывод ошибок валидации

import * as Yup from "yup";
// Yup для валидации формы (email, password, confirmPassword)

import { useAppDispatch } from "../../app/hooks";
// Хук Redux для отправки action (dispatch) в store

import { loginSuccess } from "../../store/authSlice";
// Экшен Redux для сохранения авторизованного пользователя

import { useNavigate } from "react-router";
// Хук для программной навигации между страницами

import keys from "../../configs/keys";
import Button from "../../components/ui/button/Button";
// Кастомная кнопка Button с вариантами стилей

import { Eye, EyeOff } from "lucide-react";
// Иконки показать/скрыть пароль

import "./Register.scss";
// Стили для формы регистрации

const RegisterForm = () => {
  // Основной компонент формы регистрации

  const [showPassword, setShowPassword] = useState(false);
  // Состояние, показывать ли пароль (true — видимый, false — скрытый)

  const dispatch = useAppDispatch();
  // Получаем функцию dispatch для Redux

  const navigate = useNavigate();
  // Получаем функцию navigate для программной навигации

  // Схема валидации для регистрации
  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    // Email должен быть валидным и обязательным

    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
    // Пароль минимум 6 символов и обязательный

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      // confirmPassword должен совпадать с password
      .required("Confirm password required"),
    // confirmPassword обязательное поле
  });

  const handleSubmit = async (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const res = await fetch(keys.SIGN_UP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          returnSecureToken: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg = data?.error?.message || "Registration failed";
        return alert(msg);
      }
      dispatch(loginSuccess({ id: data.localId, email: data.email }));
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={schema}
      // Схема валидации формы
      onSubmit={handleSubmit}
      // Функция при отправке формы
    >
      <Form className="RegisterForm">
        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" className="error" />
        <div className="password-wrapper">
          {/* Контейнер поля password и иконки показать/скрыть */}
          <Field
            name="password"
            type={showPassword ? "text" : "password"}
            // Если showPassword=true, показываем текст, иначе скрытый пароль
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

        {/* Confirm Password */}
        <div className="password-wrapper">
          {/* Контейнер для поля confirmPassword и иконки */}
          <Field
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            // При клике меняем состояние showPassword
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
        <ErrorMessage
          name="confirmPassword"
          component="div"
          className="error"
        />
        <Button variant="primary">
          Register
          {/* Кнопка отправки формы */}
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
// Экспортируем компонент RegisterForm для использования в Auth.tsx
