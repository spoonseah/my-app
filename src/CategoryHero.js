function CategoryHero() {
  return (
    <div style={styles.container}>
      <div style={styles.thumb}>
        <img src="../images/categoryhero.jpeg" style={styles.img} />
        <div style={styles.overlay}>
          <div style={styles.textwrap}>
            <div style={styles.storename}>Best Denki</div>
            <div style={styles.location}>#B1-24 Waterway Point</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {},
  thumb: {
    position: "relative",
  },
  img: {
    display: "block",
  },
  overlay: {
    background:
      "linear-gradient( 0deg, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0) 80% )",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
  },
  textwrap: {
    position: "absolute",
    bottom: "15px",
    left: "15px",
    color: "#fff",
  },
  storename: {
    fontSize: "20px",
  },
  location: {
    fontSize: "14px",
    marginTop: "3px",
    fontWeight: "400",
  },
};

export default CategoryHero;
