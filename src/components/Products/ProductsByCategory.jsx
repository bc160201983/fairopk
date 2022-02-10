import React, { useEffect, useState, useRef } from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlus,
  AiOutlineLine,
} from "react-icons/ai";
import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";
import { api } from "../../lib/woo";

const Products = ({ id, name }) => {
  const ref = useRef(null);
  const [products, setProducts] = useState([]);
  const [addItemButton, SetAddItemButton] = useState(false);

  //   const fetchCet

  const handleCartCount = () => {
    console.log("clicked");
    SetAddItemButton(true);
  };
  const fetchCatProducts = async () => {
    const res = await api.get("products", { category: parseInt(id) });
    const data = await res.data;
    setProducts(data);
  };

  useEffect(() => {
    fetchCatProducts();
  }, []);
  return (
    <div className="w-full  border-b border-solid border-gray-150 mt-5">
      <ProductHeader title={name} refs={ref} />

      <div
        className="products h-[250px] space-x-4 w-full mt-4 flex justify-start items-center overflow-x-scroll no-scrollbar scroll-smooth"
        ref={ref}
      >
        {products.map((product) => {
          const image = product.images[0];

          return (
            <ProductList
              key={product.id}
              handleCartCount={handleCartCount}
              addItemButton={addItemButton}
              image={image}
              {...product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
