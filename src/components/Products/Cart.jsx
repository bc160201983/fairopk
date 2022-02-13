import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
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
      <div className="modal" ref={wrapperRef}>
        cart
      </div>
    </div>
  );
};

export default Cart;
