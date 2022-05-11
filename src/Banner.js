function Banner() {
  return (
    <div style={styles.container}>
      <img src="../images/banner.jpg" style={styles.banner} />
    </div>
  );
}

const styles = {
  container: {
    padding: "15px",
  },
  banner: {
    width: "100%",
    display: "block",
    objectFit: "cover",
    height: "42vw",
  },
};

export default Banner;
