import Product from "./Product";

function Carousel() {
  return (
    <div style={styles.container}>
      <div style={styles.product}>
        <Product />
      </div>
      <div style={styles.product}>
        <Product />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  product: {},
};

export default Carousel;
