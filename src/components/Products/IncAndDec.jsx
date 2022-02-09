import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useGlobalContext } from "../../context";

const IncAndDec = ({ id, amount }) => {
  const { increase } = useGlobalContext();

  return (
    <div className="absolute rounded-[4px] bg-[#FFe141] bottom-1 w-[128px] flex justify-between items-center border border-solid border-[#dddddd]">
      <div className="cursor-pointer flex justify-center items-center rounded-[4px]  left-[6rem] bottom-[96px] w-[36px] h-[36px]">
        <AiOutlineMinus className="h-[28px] w-[28px]" />
      </div>
      <div className="cursor-pointer flex justify-center items-center rounded-[4px]  w-[36px] h-[36px]">
        {amount}
      </div>
      <div
        onClick={() => increase(id)}
        className="cursor-pointer flex justify-center items-center rounded-[4px] w-[36px] h-[36px]"
      >
        <AiOutlinePlus className="h-[28px] w-[28px]" />
      </div>
    </div>
  );
};

export default IncAndDec;
