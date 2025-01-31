const CompanyStats_Section = () => {
  return (
    <section style={styles.statsSection}>
      <h2 style={styles.heading}>Our Achievements</h2>
      <p style={styles.subtext}>
        We are committed to delivering quality services with excellence.
      </p>
      <div style={styles.statsContainer}>
        <div style={styles.statBox}>
          <h2 style={styles.statNumber}>500+</h2>
          <p style={styles.statLabel}>Happy Clients</p>
        </div>
        <div style={styles.statBox}>
          <h2 style={styles.statNumber}>1200+</h2>
          <p style={styles.statLabel}>Completed Projects</p>
        </div>
        <div style={styles.statBox}>
          <h2 style={styles.statNumber}>50+</h2>
          <p style={styles.statLabel}>Team Members</p>
        </div>
        <div style={styles.statBox}>
          <h2 style={styles.statNumber}>3000+</h2>
          <p style={styles.statLabel}>Parking Spots Managed</p>
        </div>
      </div>
    </section>
  );
};

// Internal Styles
const styles = {
  statsSection: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#fff",
  },
  heading: {
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
    fontSize: "2.5rem",
  },
  subtext: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "800px",
    margin: "0 auto 40px",
    lineHeight: "1.6",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "50px",
  },
  statBox: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "rgb(0, 188, 212)",
    marginBottom: "10px",
  },
  statLabel: {
    fontSize: "16px",
    color: "#555",
  },
};

export default CompanyStats_Section;
