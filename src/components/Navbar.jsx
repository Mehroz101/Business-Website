import { useState } from "react";
import "../styles/Navbar.css"; // Import external CSS
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { ROUTES } from "../utils/routes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logoImg}
          alt="Company Logo"
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
        />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {[
            { label: "Home", route: "/" },
            { label: "About", route: ROUTES.ABOUTUS },
            { label: "All Projects", route: ROUTES.ALLPROJECTS },
            { label: "Industries", route: ROUTES.INDUSTRIES },
            { label: "Contact", route: ROUTES.CONTACT },
          ].map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => setDropdown(index)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                to={item.label !== "Industries" && `${item.route}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
              {dropdown === index && item.label === "Industries" && (
                <div className="dropdown-menu">
                  <Link to={item.route + "#Banking"}>Banking</Link>
                  <Link to={item.route + "#Healthcare"}> Healthcare</Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
