import { useEffect, useState } from "react";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import SiteAge from "../SiteAge/SiteAge";
// Импортируем иконки соцсетей из react-icons
import "./Footer.scss";

const Footer = () => {
  const [hidden, setHidden] = useState(false);
  // Состояние: скрыт ли футер (true = скрыт)

  const [lastScroll, setLastScroll] = useState(0);
  // Храним предыдущую позицию скролла страницы

  const [glowOffset, setGlowOffset] = useState(0);
  // Смещение glow-линии для параллакс-эффекта

  useEffect(() => {
    // useEffect срабатывает при изменении lastScroll

    const onScroll = () => {
      // Функция-обработчик события scroll

      const current = window.scrollY;
      // Текущая позиция скролла по вертикали

      // 🔁 hide / show footer
      if (current > lastScroll && current > 120) {
        // Если пользователь скроллит вниз и уже проскроллил больше 120px

        setHidden(true);
        // Скрываем футер
      } else {
        // Если пользователь скроллит вверх

        setHidden(false);
        // Показываем футер
      }

      setLastScroll(current);
      // Обновляем последнюю позицию скролла

      // 🌌 parallax glow
      setGlowOffset(current * 0.15);
      // Создаём параллакс-эффект для glow-линии
    };

    window.addEventListener("scroll", onScroll);
    // Подписываемся на событие scroll

    return () => window.removeEventListener("scroll", onScroll);
    // Убираем обработчик при размонтировании компонента
  }, [lastScroll]);
  // Эффект пересчитывается при изменении lastScroll

  return (
    <footer className={`Footer ${hidden ? "Footer--hidden" : ""}`}>
      {/* Основной контейнер футера + класс скрытия */}

      <div
        className="Footer_glowLine"
        // Светящаяся линия над футером

        style={{ transform: `translate(-50%, ${glowOffset}px)` }}
        // Двигаем линию вниз/вверх в зависимости от скролла
      />

      <div className="Footer_inner">
        {/* Внутренний контейнер для контента футера */}

        <span className="Footer_left">
          <SiteAge />
        </span>

        <div className="Footer_socials">
          {/* Блок с иконками соцсетей */}

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            {/* Ссылка на GitHub */}

            <FaGithub />
            {/* Иконка GitHub */}
          </a>

          <a href="https://t.me/" target="_blank" rel="noreferrer">
            {/* Ссылка на Telegram */}

            <FaTelegramPlane />
            {/* Иконка Telegram */}
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            {/* Ссылка на LinkedIn */}

            <FaLinkedinIn />
            {/* Иконка LinkedIn */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// Экспортируем компонент Footer
