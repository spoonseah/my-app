function Product() {
  return (
    <div style={styles.container}>
      <div style={styles.thumb}>
        <img src="../images/product1.jpg" />
      </div>
      <div>Philips Avent</div>
      <div style={styles.productName}>4-in-1 Healthy Baby Food Maker</div>
      <div>$199.00</div>
    </div>
  );
}

const styles = {
  container: {
    padding: "0 10px",
  },
  thumb: {
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  productName: {
    margin: "3px 0 12px 0",
    color: "#666",
  },
};

export default Product;
