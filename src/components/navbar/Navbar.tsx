import { Link, useLocation } from "react-router";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="Nav">
      <div className="Nav_logo">
        <Link to="/">
          <span className="Nav_logoText">AG</span>
        </Link>
      </div>

      <div className="Nav_links">
        <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
        <Link to="/projects" className={isActive("/projects") ? "active" : ""}>Projects</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
