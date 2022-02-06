import React, { useEffect, useState } from "react";
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
    <div className="w-full">
      <ProductHeader title={name} />

      <div className="products h-[250px] space-x-4 w-full mt-4 flex justify-start items-center overflow-x-scroll">
        {products.map((product) => {
          const image = product.images[0];
          //console.log(image);
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
