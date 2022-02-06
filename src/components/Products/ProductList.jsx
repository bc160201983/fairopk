import React, { useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlus,
  AiOutlineLine,
} from "react-icons/ai";

const default_image =
  "https://i0.wp.com/fairo.pk/wp-content/uploads/2019/02/fairo.pk_d00a_04a_1_300x224.png?fit=300%2C224&ssl=1";

const ProductList = ({
  name,
  price,
  image,
  handleCartCount,
  addItemButton,
}) => {
  useEffect(() => {
    console.log(image?.src === undefined);
  }, []);

  return (
    <div>
      <div className="product-info relative flex flex-col hover:shadow-lg cursor-pointer">
        <div className="relative w-[126px] flex justify-center items-center h-[126px] rounded-[9px] border border-solid border-[#f2f2f2]">
          <img
            src={image === undefined ? default_image : image?.src}
            alt=""
            className="h-[88px] w-[88px]"
          />
        </div>
        <div className="bg-white cursor-pointer shadow-md flex justify-center items-center rounded-[4px] absolute left-[6rem] bottom-[96px] w-[36px] h-[36px] border border-solid border-[#dddddd]">
          {addItemButton === true ? (
            <div className="w-full block bg-[#FFe141]">
              <AiOutlineLine />
              <AiOutlinePlus
                className="h-[28px] w-[28px]"
                onClick={handleCartCount}
              />
            </div>
          ) : (
            <AiOutlinePlus
              className="h-[28px] w-[28px]"
              onClick={handleCartCount}
            />
          )}
        </div>
        <div className="p-2">
          <div className="product-name pt-4 truncate">{name.slice(0, 15)}</div>
          <div className="weight whitespace-nowrap">1Kg</div>
          <div className="price whitespace-nowrap">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;