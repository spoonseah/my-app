function AdBrown() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <div style={styles.body}>
          Receive a $10 Frasers Property Digital Gift Card (DGC) with a min.
          spend of $60
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 10,
    backgroundColor: "brown",
  },
  title: {
    fontSize: 16,
  },
  body: {
    fontSize: 12,
    textAlign: "center",
  },
};

export default AdBrown;
