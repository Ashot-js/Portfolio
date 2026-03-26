import { useState } from "react";
// Хук useState из React для локального состояния (например, показать/скрыть пароль)
import { toast } from "react-toastify";

import { Formik, Form, Field, ErrorMessage } from "formik";
// Импорт компонентов Formik:
// Formik - контейнер для формы
// Form - тег формы
// Field - поле ввода
// ErrorMessage - вывод ошибок валидации

import * as Yup from "yup";

import { useAppDispatch } from "../../app/hooks";

import { loginSuccess } from "../../store/authSlice";

import { useNavigate } from "react-router";

import Button from "../../components/ui/button/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";

import { Eye, EyeOff } from "lucide-react";

import "./Register.scss";

const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password required"),
  });

  const handleSubmit = async (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      dispatch(
        loginSuccess({
          id: credential.user.uid,
          email: credential.user.email ?? values.email,
        })
      );
      navigate("/");
    } catch {
      toast.error("Registration failed");
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
