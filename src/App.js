import TopNav from "./components/TopNav/TopNav";
import "./App.css";
import Banner1 from "./components/Banner/Banner1";
import AppdownloadBanner from "./components/Banner/AppdownloadBanner";
import Slider1 from "./components/Slider/Slider1";

function App() {
  return (
    <div>
      <TopNav />
      <div className="max-w-screen-xl mx-auto">
        <Banner1 />
        <AppdownloadBanner />
        <Slider1 />
      </div>
    </div>
  );
}

export default App;
