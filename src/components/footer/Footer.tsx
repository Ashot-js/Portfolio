import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import SiteAge from "../SiteAge/SiteAge";
import "./Footer.scss";

const SOCIALS = [
  { href: "https://github.com/Ashot-js", label: "GitHub", Icon: FaGithub },
  { href: "https://t.me/Ashot_js", label: "Telegram", Icon: FaTelegramPlane },
  { href: "https://linkedin.com/in/ashot-js", label: "LinkedIn", Icon: FaLinkedinIn },
];

const Footer = () => (
  <footer className="Footer">
    <SiteAge />
    <div className="Footer_socials">
      {SOCIALS.map(({ href, label, Icon }) => (
        <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}>
          <Icon />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
