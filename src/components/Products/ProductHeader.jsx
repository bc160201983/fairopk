import React from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlus,
  AiOutlineLine,
} from "react-icons/ai";

const ProductHeader = ({ title, refs }) => {
  const scroll = (scrollOffset) => {
    refs.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className="header flex justify-between items-center content-center">
        <div className="left lg:ml-2 ml-4">
          <div>
            <h2 className="font-bold flex-nowrap">{title}</h2>
            <p className="flex-nowrap">eat fresh, stay healthy</p>
          </div>
        </div>
        <div className="right lg:mr-2 mr-4 flex sm:justify-center justify-start items-center content-center sm:space-x-3">
          <div className="flex-nowrap float-right">see more</div>
          <div className="sm:inline-block hidden">
            <div className="flex flex-col justify-around items-center">
              <div
                onClick={() => scroll(-500)}
                className="h-[34] w-[34] rounded-[4px] p-[8px] border border-solid border-[#dddddd] hover:bg-[#0c831f] hover:text-white cursor-pointer"
              >
                <AiOutlineLeft />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-around items-center sm:inline-block hidden">
              <div
                onClick={() => scroll(500)}
                className="h-[34] w-[34] rounded-[4px] p-[8px] border border-solid border-[#dddddd] hover:bg-[#0c831f] hover:text-white cursor-pointer"
              >
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
