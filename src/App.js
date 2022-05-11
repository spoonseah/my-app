import "./App.css";
import Theme from "./Theme";
import Header from "./Header";
import Ad from "./Ad";
import AdBrown from "./AdBrown";

function App() {
  return (
    <div style={Theme.globalStyle}>
      <Header />
      <Ad />
      <AdBrown />
    </div>
  );
}

export default App;
