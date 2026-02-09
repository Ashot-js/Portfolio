import { useState } from "react";
import "./About.scss";

import { Language, LanguageOption } from "../../types/global";
import { ABOUT_TEXTS } from "../../types/about.texts";

import ReactLogo from "../../assets/reactlogo.png";
import Button from "../../components/ui/button/Button";

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

  return (
    <div className="AboutPage">
      <div className="AboutContainer">
        <div className="AboutImageWrapper">
          <img src={ReactLogo} alt="Avatar" className="AboutImage" />
        </div>

        <div className="AboutLang">
          <Button
            variant="lang"
            className="AboutLang_current"
            onClick={() => setOpen((prev) => !prev)}
          >
            {languages.find((l) => l.code === lang)?.label}
          </Button>

          {open && (
            <div className="AboutLang_menu">
              {languages.map((l) => (
                <Button
                  key={l.code}
                  variant="lang"
                  className={`AboutLang_item ${l.code === lang ? "active" : ""}`}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                >
                  {l.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="AboutContent AboutContent--bottom">
          <h1 className="AboutTitle">{ABOUT_TEXTS[lang].title}</h1>

          {ABOUT_TEXTS[lang].paragraphs.map((p, i) => (
            <p key={i} className="AboutText">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
