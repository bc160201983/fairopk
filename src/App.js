import TopNav from "./components/TopNav/TopNav";
import "./App.css";
import Banner1 from "./components/Banner/Banner1";
import AppdownloadBanner from "./components/Banner/AppdownloadBanner";
import ProductsByCategory from "./components/Home/ProductsByCategory";
import { useGlobalContext } from "./context";
import Alert from "./components/Home/Alert";
import Cart from "./components/cart/Cart";

function App({}) {
  const { categories, alert, showAlert, cartVisible } = useGlobalContext();

  return (
    <div className="">
      <div className={`snackbar ${alert.show && `show`}`}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      </div>

      <TopNav />

      {cartVisible && <Cart />}
      <div className="w-full overflow-y-auto h-[calc(100vh-64px)]">
        <div className="max-w-screen-xl mx-auto">
          <Banner1 />
          <AppdownloadBanner />
          {/* <Slider1 /> */}
          {categories.map((category) => (
            <ProductsByCategory key={category.id} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
