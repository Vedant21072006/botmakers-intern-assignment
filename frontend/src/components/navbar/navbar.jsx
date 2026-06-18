import "./navbar.css";
import logo from "../../assets/icons/logo1.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="navbar__menu">
        <a href="/">Events</a>
        <a href="/">Programs</a>
        <a href="/">Community</a>
        <a href="/">Ranks</a>
          <span className="nav-indicator"></span>
      </nav>

      <div className="navbar__actions">
        <button className="login-btn">
          Login
        </button>

        <button className="register-btn">
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;