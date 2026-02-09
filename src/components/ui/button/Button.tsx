import "./Button.scss";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "lang";
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...rest // ← сюда попадут все стандартные пропсы кнопки (type, disabled и т.д.)
}: ButtonProps) => {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      {...rest} // передаем все остальные атрибуты кнопки
    >
      {children}
    </button>
  );
};

export default Button;
