import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../app/hooks";

import { loginSuccess } from "../../store/authSlice";

import { useNavigate } from "react-router";

import Button from "../../components/ui/button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";

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
      const credential = await signInWithEmailAndPassword(
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
    } catch (err) {
      console.error(err);
      toast.error("Wrong email or password");
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
