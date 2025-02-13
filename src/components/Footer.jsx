import mapTexture from "../assets/mapTexture.png";
import "../styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div
        className="topSection"
        style={{ backgroundImage: `url(${mapTexture})` }}
      >
        <h2 className="tagline">Find Your Perfect Solution</h2>
        <p className="supportingText">
          Discover the best services to offer your business.
        </p>
        <button className="button btn">Get Started</button>
      </div>
      {/* Middle Section */}
      <div className="middleSection">
        {/* Menu Sections */}
        <div className="menuSection">
          <h3 className="menuTitle">Company</h3>
          <ul className="menuList">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="menuSection">
          <h3 className="menuTitle">Services</h3>
          <ul className="menuList">
            <li>IT Solutions</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="menuSection">
          <h3 className="menuTitle">Resources</h3>
          <ul className="menuList">
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div className="emailSection">
          <h3 className="menuTitle">Subscribe</h3>
          <p className="text-sm">
            Get the latest updates on new IT solutions and offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
          />
          <button className="button btn">Subscribe</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottomSection">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="companyName">EDUsoft System Solution.</span> All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
