import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.scss";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className={`Nav ${open ? "Nav--open" : ""}`}>
      <Link to="/" className="Nav_logo" aria-label="Home" onClick={() => setOpen(false)}>AG</Link>

      <button
        className="Nav_toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
      </button>

      <div id="nav-links" className="Nav_links">
        {LINKS.map(({ to, label }) => (
          <NavLink key={to} to={to} end onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
