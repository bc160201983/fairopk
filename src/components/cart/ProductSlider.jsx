import React from "react";
import IncAndDec from "../Home/IncAndDec";

const ProductSlider = () => {
  return (
    <div className="bg-white mt-2 w-full">
      <div className="header flex justify-between p-[16px] text-center">
        <div className="title font-bold text-[18px]">
          fresh fruits & vegetables
        </div>
        <div className="link">see more</div>
      </div>

      <div className="product">
        <div className="image">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=140/app/images/products/sliding_image/3983a.jpg?ts=1637669584"
            alt=""
          />
        </div>
        <div className="item-details">
          <div className="price">Rs213</div>
          <div className="product-title">Kimia Dates (Khajur) - Packets</div>
          <div className="weight">500 g</div>
          <div className="btn">
            <IncAndDec />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
