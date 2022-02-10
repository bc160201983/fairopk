import React, { useState, useRef, useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineDown,
} from "react-icons/ai";
import { useGlobalContext } from "../../context";

/**
 * Hook that alerts clicks outside of the passed ref
 */

const TopNav = () => {
  const [visible, setVisible] = useState(false);
  const [addClass, setAddClass] = useState("");
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const { total } = useGlobalContext();
  const handleSearch = () => {
    setVisible(true);
    const style = `
    backgroundColor: "black",
    
    `;
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <nav className="w-full lg:h-[64px] h-auto bg-[#FFe141] sticky top-0 z-50">
        <div className="nav-wrraper lg:flex justify-center items-center p-1">
          <div className="left-header w-1/4 flex lg:justify-evenly justify-start mx-auto items-center">
            <div className="logo lg:visible invisible">
              <img
                width="70"
                height="35"
                className="object-contain"
                src="https://i0.wp.com/fairo.pk/wp-content/uploads/2019/02/fairo.pk_d00a_04a_1_300x224.png?fit=300%2C224&ssl=1"
                alt=""
              />
            </div>
            <div className="delivery flex justify-center text-sm whitespace-nowrap items-center cursor-pointer">
              delivery in 8 minuts
              <AiOutlineDown className="ml-1" />
            </div>
          </div>
          <div
            className="middle-header lg:w-1/2 w-full mx-auto mt-2"
            onClick={handleSearch}
          >
            <div className="search-input  border-solid	border-[D8D8D8] relative">
              <button className="absolute block top-0	left-0 h-[42px] w-[40px] text-[#999999] leading-[27.6px] pl-2 text-[24px]">
                <AiOutlineSearch className="" />
              </button>
              <input
                placeholder="Search for products"
                className={`w-full rounded-t-[8px] h-11 mr-[-43px] pr-[16px] pl-[48px] focus:outline-none ${
                  visible || "rounded-[8px]"
                }`}
                type="text"
              />
              {visible && (
                <div
                  ref={wrapperRef}
                  id="myModal"
                  className={`bg-white w-full h-52 absolute rounded-b-[8px] z-[2001] my-modal ease-in duration-300	`}
                ></div>
              )}
            </div>
          </div>
          <div className="right-header lg:w-1/4 flex justify-evenly items-center mt-2">
            <div className="categories">
              <a href="#">Categories</a>
            </div>
            <div className="login">login</div>
            <div className="hover:bg-[#499220] text-sm text-white w-[92px] h-[40px] cart rounded-[58px] flex justify-center items-center bg-[#0c831f]">
              <AiOutlineShoppingCart className="" />
              <span className="px-1">
                {total.amount !== 0
                  ? total.amount + " items" + " Rs" + total.total
                  : "my cart"}
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="md:flex md:justify-center w-full items-center space-x-40 md:items-center bg-[#FFe141] md:h-[64px] h-[120px] sm:z-[1000] sticky">
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
      </nav> */}
    </>
  );
};

export default TopNav;
