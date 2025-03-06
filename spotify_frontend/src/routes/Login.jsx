import React from "react";

import spotify_logo from "../assets/spotify_logo.svg";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";

export default function LoginComponent() {
  return (
    <div className="bg-white h-full w-full flex flex-col items-center ">
      <div
        className="border-b border-solid
        border-gray-300
        w-full flex justify-center
        "
      >
        <img
          src={spotify_logo}
          alt="spotify_clone"
          className="
          h-32 w-32
          "
        />
      </div>

      <div
        className="inputRegion w-1/3 
        py-10 flex flex-col items-center 
        justify-center "
      >
        <div
          className="
          font-bold mb-6
          "
        >
          To continue, log in to spotify.
        </div>
        <TextInput
          label={"Email address or username"}
          placeholder={"Email address or username"}
          className={`my-2`}
        />
        <PasswordInput
          label={"Password"}
          placeholder={"Password"}
        />

        <div className=" w-full
         flex items-center justify-end my-8
        ">
        <button
        className="bg-green-400
        font-semibold px-10 p-3
        rounded-full
        "
        >LOG IN</button>
        </div>
        <div className="w-full border border-solid
        border-gray-300"></div>

        <div className="my-6 text-lg
        font-semibold
        ">
          Don't have an account?
        </div>

        <div className="
        w-full rounded-full py-4
        text-center font-bold 
        border border-solid
        border-gray-500
        text-gray-500 
        ">
          SIGN UP FOR SPOTIFY
        </div>
        
      </div>
    </div>
  );
}
