import "./Button.scss";

// Описываем тип пропсов кнопки
type ButtonProps =
  // Наследуем все стандартные HTML-атрибуты кнопки
  // (onClick, type, disabled, form и т.д.)
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    // Контент кнопки (текст, иконки, JSX)
    children: React.ReactNode;

    // Вариант оформления кнопки
    // primary — основная
    // secondary — вторичная
    // lang — кнопка выбора языка
    variant?: "primary" | "secondary" | "lang";
  };

// Объявляем функциональный компонент Button
const Button = ({
  // Дочерние элементы кнопки
  children,

  // Вариант кнопки (по умолчанию primary)
  variant = "primary",

  // Дополнительные CSS-классы, если нужны извне
  className = "",

  // rest — все остальные HTML-атрибуты кнопки
  // (type, onClick, disabled, aria-*, data-* и т.д.)
  ...rest // ← сюда попадут все стандартные пропсы кнопки
}: ButtonProps) => {
  // Возвращаем JSX-разметку кнопки
  return (
    <button
      // Формируем className:
      // btn — базовый класс
      // btn--${variant} — модификатор варианта
      // className — пользовательские классы
      className={`btn btn--${variant} ${className}`}
      // Передаём все остальные HTML-атрибуты кнопке
      {...rest}
    >
      {/* Отрисовываем содержимое кнопки */}
      {children}
    </button>
  );
};

// Экспортируем компонент Button по умолчанию
export default Button;
