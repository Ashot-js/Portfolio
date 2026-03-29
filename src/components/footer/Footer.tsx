import { useEffect, useRef, useState } from "react";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import SiteAge from "../SiteAge/SiteAge";
import "./Footer.scss";

const Footer = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollRef = useRef(0);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollRef.current && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollRef.current = current;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(-50%, ${current * 0.15}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className={`Footer ${hidden ? "Footer--hidden" : ""}`}>
      <div className="Footer_glowLine" ref={glowRef} />

      <div className="Footer_inner">
        <SiteAge />
      </div>
      <div className="Footer_socials">
        <a href="https://github.com/Ashot-js" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://t.me/Ashot_js" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </a>

        <a href="https://linkedin.com/in/ashot-js" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
