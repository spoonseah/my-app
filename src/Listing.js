import CategoryHero from "./CategoryHero";
import ProductListing from "./ProductListing";

function Listing() {
  return (
    <div style={styles.container}>
      <CategoryHero />
      <ProductListing />
    </div>
  );
}

const styles = {
  container: {},
};

export default Listing;
