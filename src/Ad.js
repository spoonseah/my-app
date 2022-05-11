function Ad() {
  return (
    <div style={styles.container}>
      <div style={styles.strong}>
        Receive a $10 Frasers Property Digital Gift Card (DGC) with a min. spend
        of $60
      </div>
      <div>T&C Applies</div>
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
    backgroundColor: "#A8DDDB",
    fontSize: 13,
    textAlign: "center",
  },
  strong: { fontWeight: "600" },
};

export default Ad;
