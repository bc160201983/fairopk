import React, { useState, useContext, useEffect, useReducer } from "react";
import { api } from "./lib/woo";
// make sure to use https
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [inCart, setInCart] = useState(false);
  const [categories, setCategories] = useState([]);
  const [totalItemAmount, setTotalItemAmount] = useState(0);

  const fetchCategoryProducts = async () => {
    const res = await api.get("products/categories", { per_page: 5 });
    const data = await res.data;
    const withProducts = data.filter((cat) => cat.count !== 0);
    setCategories(withProducts);
  };

  const AddToCart = (id, name, price, image) => {
    const newCartItem = {
      id: id,
      title: name,
      price: price,
      image: image,
      amount: 1,
    };

    setCart([...cart, newCartItem]);
  };

  const increase = (id) => {
    const newObj = [];
    let tempCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });

    setCart(...newObj, tempCart);
  };

  console.log(cart);

  useEffect(() => {
    fetchCategoryProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{ categories, AddToCart, inCart, setInCart, increase, cart }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
