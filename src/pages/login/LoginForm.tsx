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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password required"),
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
    } catch {
      toast.error("Wrong email or password");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className="LoginForm">
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

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
