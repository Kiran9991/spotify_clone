import React from "react";
import { Icon } from "@iconify/react";

export default function IconText({ iconName, displayText, active }) {
  return (
    <div className="flex items-center justify-start cursor-pointer">
      <div className="logoDiv px-5 py-2">
        <Icon
          icon={iconName}
          fontSize={25}
          color={active ? "white" : "gray"}
          
        />
      </div>
      <div
        className={`${active ? "text-white" : "text-gray-400"}
        hover:text-white
        text-sm font-semibold`}
      >
        {displayText}
      </div>
    </div>
  );
}
