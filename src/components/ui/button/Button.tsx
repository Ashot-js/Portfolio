import "./Button.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "lang";
};

const Button = ({ children, variant = "primary", className = "", ...rest }: ButtonProps) => (
  <button className={`btn btn--${variant} ${className}`.trim()} {...rest}>
    {children}
  </button>
);

export default Button;
