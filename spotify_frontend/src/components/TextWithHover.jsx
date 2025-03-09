import React from "react";
// import { Icon } from "@iconify/react";

export default function TextWithHover({ displayText, active }) {
  return (
    <div className="flex items-center justify-start cursor-pointer">
      {/* <div className="logoDiv px-5 py-2">
        <Icon
          icon={iconName}
          fontSize={27}
          color={active ? "white" : "gray"}
          
        />
      </div> */}
      <div
        className={`${active ? "text-white" : "text-gray-500"}
        font-semibold hover:text-white text-lg `}
      >
        {displayText}
      </div>
    </div>
  );
}
