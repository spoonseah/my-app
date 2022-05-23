function SideMenu() {
  return (
    <div style={styles.container}>
      <ul style={styles.ul}>
        <li style={styles.li}>ABOUT</li>
        <li style={styles.li}>ABOUT</li>
        <li style={styles.li}>ABOUT</li>
        <li style={styles.li}>ABOUT</li>
      </ul>
      <div style={styles.closebtn}>X</div>
    </div>
  );
}

const styles = {
  container: {
    padding: "15px",
    position: "absolute",
    left: "-90%",
    top: "0",
    width: "80%",
    height: "100vh",
    backgroundColor: "#fff",
    textAlign: "left",
    boxShadow: "5px 5px 5px rgba(0,0,0,0.3)",
  },
  ul: {
    padding: "0",
    margin: "0",
  },
  li: {
    listStyleType: "none",
  },
  closebtn: {
    position: "absolute",
    right: "15px",
    top: "15px",
    fontSize: "30px",
    fontWeight: "bold",
  },
};

export default SideMenu;
