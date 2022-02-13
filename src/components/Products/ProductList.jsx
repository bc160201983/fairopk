import React, { useEffect } from "react";

import { useGlobalContext } from "../../context";
import IncAndDec from "./IncAndDec";

const default_image =
  "https://i0.wp.com/fairo.pk/wp-content/uploads/2019/02/fairo.pk_d00a_04a_1_300x224.png?fit=300%2C224&ssl=1";

const ProductList = ({
  id,
  name,
  price,
  image,
  stock_quantity,
  stock_status,
  handleCartCount,
  addItemButton,
}) => {
  const { AddToCart, inCart, setInCart, increase, cart, outOfStock } =
    useGlobalContext();

  // const style = {
  //   trasnform: "translateY(10px)",
  //   backgroundColor: "pink",
  // };

  return (
    <div>
      <div className="product-info relative flex flex-col hover:shadow-lg hover:rounded-[9px] cursor-pointer">
        <div className="relative w-[126px] flex justify-center items-center h-[126px] rounded-[9px] border border-solid border-[#f2f2f2]">
          <img
            src={image === undefined ? default_image : image?.src}
            alt=""
            className="h-[88px] w-[88px]"
          />
        </div>

        {/* button */}
        <div className="relative h-[20px] ">
          <div
            onClick={
              !outOfStock(stock_status)
                ? () => AddToCart(id, name, price, image, stock_quantity)
                : null
            }
            className={`
            ${outOfStock(stock_status) && `pointer-events-none bg-[#ccad00]`}
            
            absolute rounded-[4px] cursor-pointer bg-white  bottom-1 w-[128px] flex justify-center items-center border border-solid border-[#dddddd]`}
          >
            <div
              className={`text-[#666666] flex justify-center items-center rounded-[4px]  left-[6rem] bottom-[96px] w-[36px] h-[36px]`}
            >
              {outOfStock(stock_status) ? (
                <div className="text-sm whitespace-nowrap text-white">
                  out of stock
                </div>
              ) : (
                "add"
              )}
            </div>
          </div>
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
