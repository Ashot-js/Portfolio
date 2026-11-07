import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import SiteAge from "../SiteAge/SiteAge";
import { PROFILE } from "../../data/profile";
import "./Footer.scss";

const SOCIALS = [
  { href: PROFILE.github, label: "GitHub", Icon: FaGithub },
  { href: PROFILE.telegram, label: "Telegram", Icon: FaTelegramPlane },
  { href: PROFILE.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
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
