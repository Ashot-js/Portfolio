import { useEffect, useRef, useState } from "react";
import Button from "../../components/ui/button/Button";
import { ABOUT_TEXTS, EDUCATION, EXPERIENCE, LANGUAGES, type Language } from "../../data/about";
import "./About.scss";

export default function About() {
  const [lang, setLang] = useState<Language>("en");
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the language menu on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="AboutPage">
      <section className="About_hero">
        <div className="About_avatar">AG</div>
        <h1 className="About_name">Ashot Grigoryan</h1>
        <p className="About_role">Full Stack Developer</p>
        <p className="About_location">Armenia, Yerevan</p>
      </section>

      <section className="About_section">
        <div className="About_sectionHeader">
          <h2 className="About_sectionTitle">About Me</h2>
          <div className="About_lang" ref={menuRef}>
            <Button
              variant="lang"
              onClick={() => setOpen((p) => !p)}
              aria-expanded={open}
              aria-haspopup="listbox"
            >
              {LANGUAGES.find((l) => l.code === lang)?.label}
            </Button>
            {open && (
              <div className="About_menu" role="listbox">
                {LANGUAGES.map((l) => (
                  <Button
                    key={l.code}
                    variant="lang"
                    role="option"
                    aria-selected={l.code === lang}
                    className={l.code === lang ? "active" : ""}
                    onClick={() => { setLang(l.code); setOpen(false); }}
                  >
                    {l.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="About_bio">
          <h3 className="About_bioTitle">{ABOUT_TEXTS[lang].title}</h3>
          {ABOUT_TEXTS[lang].paragraphs.map((p, i) => (
            <p key={i} className="About_bioText">{p}</p>
          ))}
        </div>
      </section>

      <section className="About_section">
        <h2 className="About_sectionTitle">Experience</h2>
        <div className="Timeline">
          {EXPERIENCE.map((item) => (
            <div key={item.role} className="Timeline_item">
              <div className="Timeline_dot" />
              <div className="Timeline_content">
                <span className="Timeline_period">{item.period}</span>
                <h3 className="Timeline_role">{item.role}</h3>
                <p className="Timeline_company">{item.company}</p>
                <p className="Timeline_desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="About_section">
        <h2 className="About_sectionTitle">Education</h2>
        <div className="Timeline">
          {EDUCATION.map((item) => (
            <div key={item.degree} className="Timeline_item">
              <div className="Timeline_dot" />
              <div className="Timeline_content">
                <span className="Timeline_period">{item.period}</span>
                <h3 className="Timeline_role">{item.degree}</h3>
                <p className="Timeline_company">{item.school}</p>
                <p className="Timeline_desc">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
