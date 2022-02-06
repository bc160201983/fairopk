import React from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlus,
  AiOutlineLine,
} from "react-icons/ai";

const ProductHeader = ({ title }) => {
  return (
    <div>
      <div className="header flex justify-between items-center content-center">
        <div className="left lg:ml-0 ml-4">
          <div>
            <h2 className="font-bold">{title}</h2>
            <p>eat fresh, stay healthy</p>
          </div>
        </div>
        <div className="right flex justify-center items-center content-center">
          <div>see more</div>
          <div className="">
            <div className="w-[75px] flex flex-col justify-around items-center">
              <div className="h-[34] w-[34] rounded-[4px] p-[8px] border border-solid border-[#dddddd]">
                <AiOutlineLeft />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[75px] flex flex-col justify-around items-center">
              <div className="h-[34] w-[34] rounded-[4px] p-[8px] border border-solid border-[#dddddd]">
                <AiOutlineRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
