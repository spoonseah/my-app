import BlackBtn from "./BlackBtn";
import Title from "./Title";

function BannerFeatureHero() {
  return (
    <div style={styles.container}>
      <Hero />
      <div style={styles.title}>
        <Title />
      </div>
      <div style={styles.blackbtn}>
        <BlackBtn />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div style={styles.hero}>
      <img src="../images/bannerfeaturehero.jpg" />
    </div>
  );
}

const styles = {
  hero: {
    marginLeft: "-15px",
    marginRight: "-15px",
  },
  title: {
    marginTop: "20px",
  },
  container: {
    padding: "20px 15px",
  },
  blackbtn: {
    margin: "20px 0 0 0",
    textAlign: "center",
  },
};

export default BannerFeatureHero;
