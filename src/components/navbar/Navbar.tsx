import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../store/authSlice";
import Button from "../ui/button/Button";
import "./Navbar.scss";
import ReactLogo from "../../assets/logo.jpg";

const Navbar = () => {
  const user = useAppSelector((s) => s.auth.user);
  const dispatch = useAppDispatch();

  return (
    <nav className="Nav">
      <div className="Nav_logo">
        <Link to="/">
          <img src={ReactLogo} alt="Logo" />
        </Link>
      </div>

      <div className="Nav_links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {user && (
        <Button
          variant="secondary"
          className="Nav_logout"
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
