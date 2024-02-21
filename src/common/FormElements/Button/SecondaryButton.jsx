import classNames from "classnames";
import React from "react";

const SecondaryButton = ({ children, onClick, inputClass }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "bg-white text-[#45818E] border-2 border-[#45818E] cursor-pointer px-3 py-0.5 rounded-md flex justify-center items-center gap-1",
        inputClass
      )}
    >
      {children}
    </div>
  );
};

export default SecondaryButton;
