import mapTexture from "../assets/mapTexture.png";
const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Top Section */}
      <div
        style={{ ...styles.topSection, backgroundImage: `url(${mapTexture})` }}
      >
        <h2 style={styles.tagline}>Find Your Perfect Solution</h2>
        <p style={styles.supportingText}>
          Discover the best services to offer your business.
        </p>
        <button style={styles.button}>Get Started</button>
      </div>

      {/* Middle Section */}
      <div style={styles.middleSection}>
        {/* Menu Sections */}
        <div style={styles.menuSection}>
          <h3 style={styles.menuTitle}>Company</h3>
          <ul style={styles.menuList} className="menu-list">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div style={styles.menuSection}>
          <h3 style={styles.menuTitle}>Services</h3>
          <ul style={styles.menuList} className="menu-list">
            <li>IT Solutions</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
        <div style={styles.menuSection}>
          <h3 style={styles.menuTitle}>Resources</h3>
          <ul style={styles.menuList} className="menu-list">
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div style={styles.emailSection}>
          <h3 style={styles.menuTitle}>Subscribe</h3>
          <p className="text-sm">
            Get the latest updates on new IT solutions and offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />
          <button style={styles.button}>Subscribe</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={styles.bottomSection}>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "rgb(0, 188, 212)", fontWeight: "bold" }}>
            EDUsoft System Solution.
          </span>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "rgb(35 35 35)",
    padding: "40px 100px",
    textAlign: "center",
    color: "#fff",
  },
  topSection: {
    marginBottom: "30px",
  },
  tagline: {
    fontSize: "44px",
    fontWeight: "bold",
    marginBottom: "10px",
    fontFamily: "'Anton', serif",
  },
  supportingText: {
    color: "rgb(219 219 219)",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "rgb(0, 188, 212)",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "12px",
  },
  middleSection: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    textAlign: "left",
    padding: "20px 0",
  },
  menuSection: {
    flex: "1",
    minWidth: "150px",
    marginBottom: "20px",
  },
  menuTitle: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "10px",
  },
  menuList: {
    listStyle: "none",
    padding: "4px 0",
    fontSize: "12px",
  },
  emailSection: {
    flex: "1",
    minWidth: "200px",
  },
  input: {
    width: "100%",
    padding: "15px 0",
    marginBottom: "10px",
    borderRadius: "2px",
    border: "none",
    borderBottom: "1px solid rgb(0, 188, 212)",
    fontSize: "14px",
    backgroundColor: "transparent",
  },
  bottomSection: {
    marginTop: "20px",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
    fontSize: "14px",
    color: "#666",
  },
};

export default Footer;
