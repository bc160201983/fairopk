import TopNav from "./components/TopNav/TopNav";
import "./App.css";
import Banner1 from "./components/Banner/Banner1";
import AppdownloadBanner from "./components/Banner/AppdownloadBanner";
import Slider1 from "./components/Slider/Slider1";
import ProductsByCategory from "./components/Products/ProductsByCategory";
import { useEffect, useState } from "react";
import { api } from "./lib/woo";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategoryProducts = async () => {
    const res = await api.get("products/categories", { per_page: 5 });
    const data = await res.data;
    const withProducts = data.filter((cat) => cat.count !== 0);
    setCategories(withProducts);
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, []);
  return (
    <div>
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
