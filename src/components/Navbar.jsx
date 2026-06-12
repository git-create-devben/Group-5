import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <img src={logo} alt="Planet logo" className="navbar__logo-img" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;