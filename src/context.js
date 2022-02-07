import React, { useState, useContext, useEffect, useReducer } from "react";
import { api } from "./lib/woo";
// make sure to use https
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategoryProducts = async () => {
    const res = await api.get("products/categories", { per_page: 5 });
    const data = await res.data;
    const withProducts = data.filter((cat) => cat.count !== 0);
    setCategories(withProducts);
  };

  const handleCart = (id, name, price, image) => {
    const newCartItem = {
      id: id,
      title: name,
      price: price,
      image: image,
      amount: 1,
    };
    setCart([...cart, newCartItem]);
  };

  console.log(cart);
  useEffect(() => {
    fetchCategoryProducts();
  }, []);

  return (
    <AppContext.Provider value={{ categories, handleCart }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
