import React from "react";

import spotify_white_logo from "../assets/Spotify_white_color_logo.png";
import IconText from '../components/IconText';
import { Icon } from '@iconify/react'

export default function HomeComponent() {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          <div
            className="spotifyLogo p-6"
          >
            <img
              src={spotify_white_logo}
              className=""
              alt="spotify_logo"
              width={130}
            />
          </div>

          <div className="py-5">
            <IconText
              iconName={"ant-design:home-filled"}
              displayText={"Home"}
              active
            />
            <IconText iconName={"meteor-icons:search"} displayText={"Search"} />
            <IconText iconName={"mdi:bookshelf"} displayText={"Library"} />
          </div>
          <div className="7 ">
            <IconText
              iconName={"icon-park-solid:add"}
              displayText={"Library"}
            />
            <IconText
              iconName={"icon-park-solid:love-and-help"}
              displayText={"Library"}
            />
          </div>
        </div>

        <div className="px-5">
          <div
            className="border border-gray-100
        text-white w-24 flex px-2 py-1 rounded-full
        items-center justify-center
        "
          >
            <Icon icon="carbon:earth" color="white" width="25" height="25" />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>

      <div className="h-full">left side of spotify clone</div>
    </div>
  );
}
