import Product from "./Product";

function ProductListing() {
  return (
    <div style={styles.container}>
      <div style={styles.product}>
        <Product />
      </div>
      <div style={styles.product}>
        <Product />
      </div>
      <div style={styles.product}>
        <Product />
      </div>
      <div style={styles.product}>
        <Product />
      </div>
      <div style={styles.product}>
        <Product />
      </div>
      <div style={styles.product}>
        <Product />
      </div>
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
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "15px 5px",
  },
  product: {
    width: "48%",
    marginBottom: "15px",
  },
};

export default ProductListing;
