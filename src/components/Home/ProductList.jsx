import React, { useEffect } from "react";

import { useGlobalContext } from "../../context";
import AddtoCartBtns from "../AddToCartBtn/AddtoCartBtns";
import IncAndDec from "./IncAndDec";

export const default_image =
  "https://i0.wp.com/fairo.pk/wp-content/uploads/2019/02/fairo.pk_d00a_04a_1_300x224.png?fit=300%2C224&ssl=1";

const ProductList = ({
  id,
  name,
  price,
  image,
  stock_quantity,
  stock_status,
}) => {
  const { AddToCart, cart, outOfStock } = useGlobalContext();
  // const style = {
  //   trasnform: "translateY(10px)",
  //   backgroundColor: "pink",
  // };

  return (
    <div>
      <div className="product-info relative flex flex-col hover:transition-all sm:hover:shadow-lg hover:rounded-[9px] cursor-pointer">
        <div className="relative w-[126px] flex justify-center items-center h-[126px] rounded-[9px] border border-solid border-[#f2f2f2]">
          <img
            src={image === undefined ? default_image : image?.src}
            alt=""
            className="h-[88px] w-[88px]"
          />
        </div>

        {/* button */}
        <div className="relative h-[20px] ">
          <AddtoCartBtns
            id={id}
            name={name}
            price={price}
            image={image}
            stock_quantity={stock_quantity}
            stock_status={stock_status}
          />
          {cart?.map((cartItem) => {
            if (cartItem.id === id) {
              return (
                <IncAndDec
                  key={cartItem.id}
                  {...cartItem}
                  stock_quantity={stock_quantity}
                />
              );
            }
          })}
        </div>

        <div className="p-0">
          <div className="product-name pt-1 truncate text-[14px]">
            {name.slice(0, 15)}
          </div>
          <div className="weight whitespace-nowrap">1Kg</div>
          <div className="price whitespace-nowrap font-bold	">
            Rs
            {Math.trunc(price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
