import SideMenu from "./SideMenu";

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
};

export default Hamburger;
