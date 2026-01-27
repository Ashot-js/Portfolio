import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { api } from "../../services/api";
import { useAppDispatch } from "../../app/hooks";
import { loginSuccess } from "../../store/authSlice";
import { useNavigate } from "react-router";
import Button from "../../components/ui/button/Button";
import "./Auth.scss";
import BgImage from "../../assets/bg.jpg"; // фон для страницы
import { Eye, EyeOff } from "lucide-react"; // иконки глаза

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // для глаза
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    if (isLogin) {
      const res = await api.get(
        `/users?email=${values.email}&password=${values.password}`
      );
      if (!res.data.length) {
        alert("Wrong email or password");
        return;
      }
      dispatch(loginSuccess(res.data[0]));
      navigate("/");
    } else {
      const existing = await api.get(`/users?email=${values.email}`);
      if (existing.data.length) {
        alert("User already exists");
        return;
      }
      const res = await api.post("/users", values);
      dispatch(loginSuccess(res.data));
      navigate("/");
    }
  };

  return (
    <div
      className={`AuthPageWrapper ${isLogin ? "login" : "register"}`}
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={`AuthPage ${isLogin ? "login" : "register"}`}>
        <div className="AuthPage_tabs">
          <Button
            variant="secondary"
            onClick={() => setIsLogin(true)}
            className={isLogin ? "active" : ""}
          >
            Login
          </Button>
          <Button
            variant="secondary"
            onClick={() => setIsLogin(false)}
            className={!isLogin ? "active" : ""}
          >
            Register
          </Button>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form className="AuthPage_form">
            <Field name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />

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

            <Button variant="primary" type="submit">
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Auth;
