import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineDown,
} from "react-icons/ai";

const TopNav = () => {
  return (
    <>
      <nav className="md:flex md:justify-center items-center space-x-10 md:items-center bg-[#FFe141] md:h-[64px] h-[120px] sm:z-[1000] sticky">
        <div className="md:flex md:flex-row md:items-center flex flex-col items-center space-x-10">
          <div className="md:visible invisible">
            <img
              width="70"
              heigh="35"
              className="w-95 h-35"
              src="https://i0.wp.com/fairo.pk/wp-content/uploads/2019/02/fairo.pk_d00a_04a_1_300x224.png?fit=300%2C224&ssl=1"
              alt="logo"
            />
          </div>
          <div className="sm:flex sm:items-center h-[66px] sm:text-[15px] font-thin sm:visible flex items-center">
            delivery in 8 minuts
            <AiOutlineDown className="ml-1" />
          </div>
        </div>

        <div className="search-input md:w-1/2 border-solid	border-[D8D8D8] relative">
          <button className="absolute block top-0	left-0 h-[42px] w-[40px] text-[#999999] leading-[27.6px] pl-2 text-[24px]">
            <AiOutlineSearch className="" />
          </button>
          <input
            placeholder="Search for products"
            className="md:w-full h-11 rounded-[8px] mr-[-43px] pr-[16px] pl-[48px] focus:outline-none"
            type="text"
          />
        </div>
        <div className="md:flex md:flex-row md:items-center flex flex-col items-center space-x-10">
          <div className="sm:visible invisible">
            <a href="" className="font-medium text-[14px]">
              Categories
            </a>
          </div>
          <div className="sm:font-medium sm:text-[14px] sm:visible invisible">
            Login
          </div>
          <div className="hover:bg-[#499220] text-sm text-white w-[92px] h-[40px] cart rounded-[58px] flex justify-center items-center bg-[#0c831f]">
            <AiOutlineShoppingCart className="" />
            <span className="px-1">my cart</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
