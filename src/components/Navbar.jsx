import { useState } from "react";
import "../styles/Navbar.css"; // Import external CSS
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      {/* Logo Section */}
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

      {/* Mobile Menu Toggle Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/aboutus"} onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/projectview"} onClick={() => setMenuOpen(false)}>
              Project
            </Link>
          </li>
          <li>
            <Link to={"/contactus"} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Call Button (Desktop) */}
        {!menuOpen && (
          <div
            className="cta-btn desktop-only"
            onClick={() => setMenuOpen(menuOpen)}
          >
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>
              Have any questions?
              <span>
                Free: <span className="number">0712 819 79 555</span>
              </span>
            </p>
          </div>
        )}

        {/* Call Button in Mobile Menu */}
        {menuOpen && (
          <div
            className="cta-btn mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>
              Have any questions?
              <span>
                Free: <span className="number">0712 819 79 555</span>
              </span>
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
