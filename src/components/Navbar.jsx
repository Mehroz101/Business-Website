import { useState } from "react";
import "../styles/Navbar.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">EDUSoft</div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/aboutus"}>About</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>

      {/* Call to Action Button */}
      <p className="cta-btn">
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <p>
          Have any questions?
          <span>
            Free: <span className="number">0712 819 79 555</span>
          </span>
        </p>
      </p>

      {/* Mobile Menu Toggle */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
