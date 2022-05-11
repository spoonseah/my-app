import Carousel from "./Carousel";
import BlackBtn from "./BlackBtn";
import Title from "./Title";

function BannerFeature() {
  return (
    <div style={styles.container}>
      <Title />
      <div style={styles.carousel}>
        <Carousel />
      </div>
      <div style={styles.blackbtn}>
        <BlackBtn />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px 15px",
  },
  carousel: {
    paddingTop: "30px",
  },
  blackbtn: {
    margin: "20px 0 0 0",
    textAlign: "center",
  },
};

export default BannerFeature;
