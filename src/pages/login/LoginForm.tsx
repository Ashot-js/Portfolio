import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../../app/hooks";

import { loginSuccess } from "../../store/authSlice";

import { useNavigate } from "react-router";

import keys from "../../configs/keys";
import Button from "../../components/ui/button/Button";

import { Eye, EyeOff } from "lucide-react";

import "./Login.scss";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // Состояние, показывать ли пароль (true — видимый, false — скрытый)

  const dispatch = useAppDispatch();
  // Получаем функцию dispatch для Redux

  const navigate = useNavigate();
  // Получаем функцию navigate для программной навигации

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    // Поле email должно быть валидным email и обязательным
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
    // Поле password должно быть минимум 6 символов и обязательным
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const res = await fetch(keys.SIGN_IN_URL, {
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
        const msg = data?.error?.message || "Wrong email or password";
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
      initialValues={{ email: "", password: "" }}
      // Начальные значения формы
      validationSchema={schema}
      // Схема валидации формы
      onSubmit={handleSubmit}
      // Функция при отправке формы
    >
      <Form className="LoginForm">
        <Field name="email" placeholder="Email" />

        <ErrorMessage name="email" component="div" className="error" />

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

        <Button variant="primary">Login</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
