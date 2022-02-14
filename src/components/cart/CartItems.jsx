import React from "react";

const CartItems = () => {
  return (
    <div>
      <div className="product-list h-[140px] mt-[2px] flex bg-white">
        <div className="product-image h-full">
          <img
            className="w-[124px] h-auto"
            src="http://cdn.grofers.com/app/images/products/normal/pro_3881.jpg?ts=1639826649"
            alt=""
          />
        </div>
        <div className="product-details">
          <div>Hybrid Tomatos</div>
          <div>Rs20</div>
          <div className="weight">500 g</div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
