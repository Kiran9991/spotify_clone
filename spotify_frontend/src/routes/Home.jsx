import React from "react";

import spotify_white_logo from "../assets/Spotify_white_color_logo.png";
import IconText from "../components/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/TextWithHover";

const cardsData = [
  {
    title: "Mountain Landscape",
    description: "A breathtaking view of mountains",
    imageUrl: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  },
  {
    title: "Serene Mountains",
    description: "Calm and peaceful mountain landscape",
    imageUrl: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  },
  {
    title: "Sunset Beach",
    description: "Enjoy the peaceful sunset by the beach",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Starry Night",
    description: "A beautiful view of the starry sky",
    imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
  },
  {
    title: "Forest Pathway",
    description: "Walk through the misty forest trail",
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  }
];


export default function HomeComponent() {
  return (
    <div className="h-full w-full flex">
      <div className="SideBar h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          <div className="spotifyLogo p-6">
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

      <div className="h-full w-4/5 bg-[#121212] overflow-auto">
        <div
          className="NavBar text-white
        bg-black w-full h-1/10 flex items-center justify-between
        bg-opacity-30
        "
        >
          <div className="ArrowIconContent ml-10 flex justify-between w-[70px]">
            <div className="bg-gray-900 hover:bg-black rounded-full p-0.5">
              <Icon icon="ep:arrow-left" color="white" width="25" height="25" />
            </div>
            <div className="bg-gray-900 hover:bg-black rounded-full p-0.5">
              <Icon
                icon="ep:arrow-right"
                color="white"
                width="25"
                height="25"
              />
            </div>
          </div>

          <div
            className="navrightcontent 
          flex items-center h-full w-1/2 justify-end
          "
          >
            <div
              className="w-3/5 flex justify-around h-full
            items-center
            "
            >
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>

            <div
              className="w-2/5 flex justify-around h-full
            items-center
            "
            >
              <TextWithHover displayText={"Sign up"} />

              <div
                className="
            bg-white text-black h-2/3 px-8 rounded-full
            flex items-center font-semibold cursor-pointer
            "
              >
                Login
              </div>
            </div>
          </div>
        </div>

        <div className="Content p-8 pt-0 overflow-auto">
          <PlaylistView titleText={'Focus'} cardsData={cardsData} />
          <PlaylistView titleText={'Spotify-Playlist'} cardsData={cardsData} />
          <PlaylistView titleText={'Sound of India'} cardsData={cardsData} />
        </div>
      </div>
    </div>
  );
}

const PlaylistView = ({ titleText, cardsData }) => {
  return <div className="text-white mt-8">
    <div className="text-2xl font-semibold mb-5">
      {titleText}
    </div>
    <div className="w-full flex justify-between space-x-4">
      {
        // cardsData will be an Array
        cardsData.map((item) => {
          return <Card title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          />
        })
      }
    </div>
  </div>
}

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="
    bg-black bg-opacity-40 w-1/5 px-5 py-2 rounded-lg
    ">
      <div className="pb-4 pt-2">
        <img
        className="w-full rounded-md"
        src={imageUrl}
        alt="label"
        />

      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500
      text-sm
      ">{description}</div>
    </div>
  )
}