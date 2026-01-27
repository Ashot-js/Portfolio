import { useEffect, useState } from "react";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [glowOffset, setGlowOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      // 🔁 hide / show footer
      if (current > lastScroll && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);

      // 🌌 parallax glow
      setGlowOffset(current * 0.15);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <footer className={`Footer ${hidden ? "Footer--hidden" : ""}`}>
      <div
        className="Footer_glowLine"
        style={{ transform: `translate(-50%, ${glowOffset}px)` }}
      />

      <div className="Footer_inner">
        <span className="Footer_left">
          © {new Date().getFullYear()} YourApp
        </span>

        <div className="Footer_socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://t.me/" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
