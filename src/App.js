import "./App.css";
import Theme from "./Theme";
import Header from "./Header";
import Ad from "./Ad";
import AdBrown from "./AdBrown";
import Slider from "./Slider";
import Banner from "./Banner";
import BannerFeature from "./BannerFeature";
import BannerFeatureHero from "./BannerFeatureHero";
import Footer from "./Footer";

function App() {
  return (
    <div style={Theme.globalStyle}>
      <Header />
      <Ad />
      <AdBrown />
      <Slider />
      <BannerFeature />
      <BannerFeatureHero />
      <Banner />
      <BannerFeature />
      <Footer />
    </div>
  );
}

export default App;
