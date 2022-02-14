import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose, AiTwotoneAlert } from "react-icons/ai";
import Modal from "react-modal";
import { useGlobalContext } from "../../context";
import BillDetails from "./BillDetails";
import CartItems from "./CartItems";
import Footer from "./Footer";
import ProductSlider from "./ProductSlider";

const Cart = () => {
  const { setCartVisible, total, cart } = useGlobalContext();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setCartVisible(false);
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
    <div className="overlay">
      <div className="modal overflow-hidden h-screen relative" ref={wrapperRef}>
        <div className="flex justify-between items-center p-[16px] z-[2000] h-[64px] shadow-lg sticky top-0 bg-white">
          <div className="font-bold text-[24px]">my cart</div>
          <div
            className="w-[28] h-[28] text-[28px] cursor-pointer"
            onClick={() => setCartVisible(false)}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="contant bg-gray-200 overflow-y-auto h-[calc(100vh-132px)]">
          <div className="shipment text-[12px] flex flex-row justify-between items-center px-4 h-[40px] ">
            <div>shipment 1 of 1</div>
            <div>{total.amount} item(s)</div>
          </div>

          <div className="delivery-time h-[72px] p-[16px] bg-white">
            <div className="font-bold text-[16px] whitespace-nowrap max-w-full">
              delivery in 12 minutes
            </div>
            <div className="pt-[4px] text-[12px]">
              from Super Store - Mumbai Kurla West ES24
            </div>
          </div>
          {cart.map((item) => {
            return <CartItems key={item.id} {...item} />;
          })}
          <BillDetails />
          <ProductSlider />
        </div>

        {/* foooter */}
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
