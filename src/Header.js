import Hamburger2 from "./Hamburger2";

function Header() {
  return (
    <div style={styles.container}>
      <div>
        <Hamburger2 />
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

function Logo() {
  return (
    <div>
      <img src={"../images/logo.png"} style={styles.logo} />
    </div>
  );
}

function SearchCart() {
  return (
    <div style={styles.searchCart}>
      <Search />
      <Cart />
    </div>
  );
}

function Search() {
  return (
    <div>
      <img src={"../images/search.svg"} style={styles.searchIcon} />
    </div>
  );
}

function Cart() {
  return (
    <div style={styles.cart}>
      <div>0</div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  logo: {
    height: "23px",
  },
  searchCart: {
    display: "flex",
  },
  searchIcon: {
    height: "26px",
    marginRight: "20px",
  },
  cart: {
    backgroundImage: "url('../images/cart.svg')",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    width: "25px",
    height: "35px",
    paddingTop: "11px",
    color: "#DB1C24",
    fontWeight: "600",
  },
};

export default Header;
