import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import Modal from "react-modal";
import { useGlobalContext } from "../../context";

const Cart = () => {
  const { setCartVisible } = useGlobalContext();
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
      <div className="modal relative" ref={wrapperRef}>
        <div className="flex justify-between items-center p-[16px] h-[64px] shadow-lg sticky top-0">
          <div className="font-bold text-[24px]">my cart</div>
          <div>
            <AiOutlineClose />
          </div>
        </div>

        {/* foooter */}
        <div className="shadow-top top-[978px] flex items-center p-[16px] sticky bottom-0 h-[69px]">
          <div className="flex justify-between items-center font-bold p-[16px] w-full rounded-md text-white bg-green-800">
            <div className="left flex items-center">
              <div className="items">1 item</div>
              <div></div>
              <div className="total-price">Rs305</div>
            </div>
            <div className="right flex items-center">
              <div>proceed</div>
              <div>
                <AiOutlineRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
