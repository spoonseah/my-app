import Ad from "./Ad";
import AdBrown from "./AdBrown";

function Listing() {
  return (
    <div style={styles.container}>
      <Ad />
      <AdBrown />
      <CategoryHero />
    </div>
  );
}

const styles = {
  container: {},
};

export default Listing;
