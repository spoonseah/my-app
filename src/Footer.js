function Footer() {
  return (
    <div style={styles.container}>
      <div>
        <img src="../images/icon-frx.png" />
      </div>
      <div style={styles.copyright}>
        Copyright © 2021. Frasers Property Retail Management Pte. Ltd.
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    padding: "50px 15px 50px 15px",
    textAlign: "center",
  },
  copyright: {
    color: "#A39B9B",
    paddingTop: "15px",
  },
};

export default Footer;
