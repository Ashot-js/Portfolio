// Импортируем хук useState из React для управления локальным состоянием
import { useState } from "react";

// Импортируем SCSS-файл со стилями страницы About
import "./About.scss";

// Импортируем типы языка и опций языка
import { Language, LanguageOption } from "../../types/global";

// Импортируем тексты About на разных языках
import { ABOUT_TEXTS } from "../../types/about.texts";

// Импортируем изображение аватара
import ReactImage from "../../assets/reactimage.jpg";

// Импортируем изображение глобуса
import GlobeImg from "../../assets/reactglobe.jpg";

// Импортируем UI-компонент кнопки
import Button from "../../components/ui/button/Button";

// Экспортируем компонент About по умолчанию
export default function About() {
  // Состояние текущего выбранного языка (по умолчанию английский)
  const [lang, setLang] = useState<Language>("en");

  // Состояние открытия / закрытия выпадающего меню языков
  const [open, setOpen] = useState(false);

  // Список доступных языков для переключения
  const languages: LanguageOption[] = [
    // Английский язык
    { code: "en", label: "English" },

    // Русский язык
    { code: "ru", label: "Русский" },

    // Французский язык
    { code: "fr", label: "Français" },

    // Итальянский язык
    { code: "it", label: "Italiano" },

    // Армянский язык
    { code: "am", label: "Հայերեն" },

    // Немецкий язык
    { code: "de", label: "Deutsch" },
  ];

  // Возвращаем JSX-разметку страницы About
  return (
    // Корневой контейнер страницы About
    <div className="AboutPage">
      {/* Обёртка для декоративного глобуса */}
      <div className="AboutGlobeWrapper">
        {/* Контейнер глобуса */}
        <div className="AboutGlobeContainer">
          {/* Световое / декоративное выделение под глобусом */}
          <div className="AboutGlobeHighlight" />

          {/* Изображение глобуса */}
          <img src={GlobeImg} alt="Globe" className="AboutGlobe" />
        </div>
      </div>

      {/* Основной контент страницы */}
      <div className="AboutContainer">
        {/* Обёртка для изображения профиля */}
        <div className="AboutImageWrapper">
          {/* Аватар / изображение */}
          <img src={ReactImage} alt="Avatar" className="AboutImage" />
        </div>

        {/* Блок переключения языка */}
        <div className="AboutLang">
          {/* Кнопка текущего языка */}
          <Button
            variant="lang"
            className="AboutLang_current"
            onClick={() => setOpen((prev) => !prev)}
          >
            {/* Отображаем название текущего языка */}
            {languages.find((l) => l.code === lang)?.label}
          </Button>

          {/* Выпадающее меню языков */}
          {open && (
            <div className="AboutLang_menu">
              {languages.map((l) => (
                <Button
                  // Уникальный ключ для React
                  key={l.code}
                  // Вариант кнопки для языкового меню
                  variant="lang"
                  // Добавляем класс active для выбранного языка
                  className={`AboutLang_item ${
                    l.code === lang ? "active" : ""
                  }`}
                  // При клике меняем язык и закрываем меню
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                >
                  {/* Название языка */}
                  {l.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Контент с текстом About */}
        <div className="AboutContent AboutContent--bottom">
          {/* Заголовок страницы */}
          <h1 className="AboutTitle">{ABOUT_TEXTS[lang].title}</h1>

          {/* Параграфы текста About */}
          {ABOUT_TEXTS[lang].paragraphs.map((p, i) => (
            <p
              // Ключ для каждого параграфа
              key={i}
              className="AboutText"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
