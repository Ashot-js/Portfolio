import { useState } from "react";
import "./About.scss";
import { Language, LanguageOption, LanguageText } from "../../types/global";
import ReactLogo from "../../assets/reactlogo.png";
export default function About() {
  const [lang, setLang] = useState<Language>("en");
  const [open, setOpen] = useState(false);

  const languages: LanguageOption[] = [
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "fr", label: "Français" },
    { code: "it", label: "Italiano" },
    { code: "am", label: "Հայերեն" },
    { code: "de", label: "Deutsch" },
  ];

  const texts: Record<Language, LanguageText> = {
    en: {
      title: "Hi, I'm a frontend developer",
      paragraphs: [
        "The project is still in its initial stage, it will expand and scale over time. Here you will find the latest news about space exploration and scientific discoveries. Made by a frontend developer using TypeScript, JavaScript, React, Vue, and SCSS, with the use of React Router and Redux libraries.",
      ],
    },
    ru: {
      title: "Привет, я frontend-разработчик",
      paragraphs: [
        "Проект находится на начальном этапе, он будет расширяться и масштабироваться. Здесь будут последние новости о открытиях научного мира. Проект сделан frontend-разработчиком с использованием TypeScript, JavaScript, React, Vue и SCSS, с применением React Router и Redux.",
      ],
    },
    fr: { title: "Salut, je suis développeur frontend", paragraphs: ["Le projet est encore à ses débuts, il s'étendra et évoluera au fil du temps."] },
    it: { title: "Ciao, sono uno sviluppatore frontend", paragraphs: ["Il progetto è ancora nelle prime fasi e crescerà nel tempo."] },
    am: { title: "Բարև, ես frontend ծրագրավորող եմ", paragraphs: ["Նախագիծը դեռ սկզբնական փուլում է և ժամանակի ընթացքում կընդլայնվի։"] },
    de: { title: "Hallo, ich bin Frontend-Entwickler", paragraphs: ["Das Projekt befindet sich noch in der Anfangsphase."] },
  };

  return (
    <div className="AboutPage">
      <div className="AboutContainer">
        {/* Верхнее место для изображения */}
        <div className="AboutImageWrapper">
          <img
            src={ReactLogo }// сюда можно вставить свою картинку
            alt="Avatar"
            className="AboutImage"
          />
        </div>

        {/* Кнопка выбора языка справа сверху */}
        <div className="AboutLang">
          <button
            type="button"
            className="AboutLang_current"
            onClick={() => setOpen(prev => !prev)}
          >
            {languages.find(l => l.code === lang)?.label}
          </button>

          {open && (
            <div className="AboutLang_menu">
              {languages.map(l => (
                <button
                  key={l.code}
                  type="button"
                  className={`AboutLang_item ${l.code === lang ? "active" : ""}`}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Нижняя часть: текст + параграфы */}
        <div className="AboutContent AboutContent--bottom">
          <h1 className="AboutTitle">{texts[lang].title}</h1>
          {texts[lang].paragraphs.map((p, i) => (
            <p key={i} className="AboutText">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}


