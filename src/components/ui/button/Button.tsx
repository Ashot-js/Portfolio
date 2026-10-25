import "./Button.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "lang" | "comment";
};

const Button = ({ children, variant = "primary", className = "", ...rest }: ButtonProps) => (
  <button className={`btn btn--${variant} ${className}`.trim()} {...rest}>
    {children}
  </button>
);

export default Button;
