function Slider() {
  return (
    <div style={styles.container}>
      <img src="../images/slide1.jpg" style={styles.slide} />
    </div>
  );
}

const styles = {
  container: {},
  slide: {
    height: "275px",
    objectFit: "cover",
    width: "100%",
  },
};

export default Slider;
