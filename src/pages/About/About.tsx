import { useState } from "react";
import Slider from "react-slick";
import "./About.scss";

import { Language, LanguageOption } from "../../types/global";
import { ABOUT_TEXTS } from "../../types/about.texts";
import ReactImage from "../../assets/reactimage.jpg";
import Button from "../../components/ui/button/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const slides = [
    { id: 1, src: "/images/slide1.webp" },
    { id: 2, src: "/images/slide2.webp" },
    { id: 3, src: "/images/slide3.webp" },
    { id: 4, src: "/images/slide4.webp" },
    { id: 5, src: "/images/slide5.webp" },
  ];

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: slides.length > 1,
    speed: 500,
    slidesToShow: Math.min(3, slides.length),
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, slides.length),
        },
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="AboutPage">
      <div className="AboutPage_container">
        <div className="AboutPage_wrapper">
          <img src={ReactImage} alt="Avatar" className="AboutImage" />
        </div>

        <div className="AboutPage_lang">
          <Button variant="lang" onClick={() => setOpen((p) => !p)}>
            {languages.find((l) => l.code === lang)?.label}
          </Button>

          {open && (
            <div className="AboutPage_menu">
              {languages.map((l) => (
                <Button
                  key={l.code}
                  variant="lang"
                  className={`AboutPage_item ${
                    l.code === lang ? "active" : ""
                  }`}
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

        <div className="AboutPage_content">
          <h1 className="AboutPage_title">{ABOUT_TEXTS[lang].title}</h1>

          {ABOUT_TEXTS[lang].paragraphs.map((p, i) => (
            <p key={i} className="AboutPage_text">
              {p}
            </p>
          ))}
        </div>
      </div>

      {slides.length > 0 && (
        <div className="AboutPage_slider">
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div key={slide.id} className="AboutPage_slide">
                <img src={slide.src} alt={`slide-${slide.id}`} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
