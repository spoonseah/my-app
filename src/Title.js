function Title() {
  return (
    <div style={styles.titleWrap}>
      <div style={styles.title}>From the Editor</div>
      <div style={styles.subTitle}>Fresh picks you don't want to miss</div>
    </div>
  );
}

const styles = {
  titleWrap: {
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "500",
  },
  subTitle: {
    paddingTop: "10px",
    lineHeight: "140%",
    color: "#666",
  },
};

export default Title;
