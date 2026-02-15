import { useState } from "react";
import "./About.scss";
// Импортируем типы языка и опций языка
import { Language, LanguageOption } from "../../types/global";
import { ABOUT_TEXTS } from "../../types/about.texts";
import ReactImage from "../../assets/reactimage.jpg";
import Button from "../../components/ui/button/Button";

export default function About() {
  // Состояние текущего выбранного языка (по умолчанию английский)
  const [lang, setLang] = useState<Language>("en");

  // Состояние открытия / закрытия выпадающего меню языков
  const [open, setOpen] = useState(false);

  // Список доступных языков для переключения
  const languages: LanguageOption[] = [
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "fr", label: "Français" },
    { code: "it", label: "Italiano" },
    { code: "am", label: "Հայերեն" },
    // Немецкий язык
    { code: "de", label: "Deutsch" },
  ];

  return (
    // Корневой контейнер страницы About
    <div className="AboutPage">
      <div className="AboutContainer">
        <div className="AboutImageWrapper">
          {/* Аватар / изображение */}
          <img src={ReactImage} alt="Avatar" className="AboutImage" />
        </div>

        {/* Блок переключения языка */}
        <div className="AboutLang">
          {/* Кнопка текущего языка */}
          <Button variant="lang" onClick={() => setOpen((prev) => !prev)}>
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
