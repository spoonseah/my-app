function Header() {
  return (
    <div style={styles.container}>
      <div>
        <Hamburger />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <SearchCart />
      </div>
    </div>
  );
}

function Hamburger() {
  return (
    <div style={styles.hamburger}>
      <div style={styles.patty}></div>
      <div style={{ ...styles.patty, ...styles.middlePatty }}></div>
      <div style={styles.patty}></div>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <img src={"../src/images/logo.png"} />
    </div>
  );
}

function SearchCart() {
  return (
    <div>
      <Search />
      <Cart />
    </div>
  );
}

function Search() {
  return <div>Search</div>;
}

function Cart() {
  return <div>Cart</div>;
}

const styles = {
  container: {
    padding: 20,
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
  },
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

export default Header;
