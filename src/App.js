import TopNav from "./components/TopNav/TopNav";
import "./App.css";
import Banner1 from "./components/Banner/Banner1";
import AppdownloadBanner from "./components/Banner/AppdownloadBanner";
import Slider1 from "./components/Slider/Slider1";
import ProductsByCategory from "./components/Products/ProductsByCategory";
import { useEffect, useState } from "react";
import { api } from "./lib/woo";
import { useGlobalContext } from "./context";
import Alert from "./components/Products/Alert";

function App({}) {
  const { categories, alert, showAlert } = useGlobalContext();
  console.log(alert);
  return (
    <div>
      <div className={`snackbar ${alert.show && `show`}`}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      </div>

      <TopNav />
      <div className="max-w-screen-xl mx-auto">
        <Banner1 />
        <AppdownloadBanner />
        <Slider1 />
        {categories.map((category) => (
          <ProductsByCategory key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}

export default App;
