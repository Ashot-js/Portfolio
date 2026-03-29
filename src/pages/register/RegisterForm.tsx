import { useState } from "react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      onSubmit={handleSubmit}
    >
      <Form className="RegisterForm">
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

        <div className="password-wrapper">
          <Field
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
          />
          <span
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
        <ErrorMessage name="confirmPassword" component="div" className="error" />

        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
