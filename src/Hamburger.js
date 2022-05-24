function Hamburger() {
  function sideMenuOpen(e) {
    alert("test"); // i want to set SideMenu container left to "0" onclick
  }
  return (
    <div style={styles.hamburger} onClick={sideMenuOpen}>
      <div style={styles.patty}></div>
      <div style={{ ...styles.patty, ...styles.middlePatty }}></div>
      <div style={styles.patty}></div>
      <SideMenu />
    </div>
  );
}

function SideMenu() {
  return (
    <div style={styles.container}>
      <ul style={styles.ul}>
        <li style={styles.li}>ABOUT</li>
        <li style={styles.li}>LISTING</li>
        <li style={styles.li}>ABOUT</li>
        <li style={styles.li}>ABOUT</li>
      </ul>
      <div style={styles.closebtn}>X</div>
    </div>
  );
}

const styles = {
  patty: {
    backgroundColor: "#807979",
    width: "28px",
    height: "2px",
    borderRadius: "3px",
  },
  middlePatty: {
    margin: "6px 0",
  },
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

export default Hamburger;
