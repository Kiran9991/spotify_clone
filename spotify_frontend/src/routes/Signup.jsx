import React from "react";
import { Link } from "react-router-dom";

import spotify_logo from "../assets/spotify_logo.svg";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";

export default function SignupComponent() {
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
          font-bold mb-6 text-2xl
          "
        >
          Sign up for free to start listening.
        </div>
        <TextInput
          label={"What's your email"}
          placeholder={"Enter your email."}
          className={`my-6`}
        />
        <TextInput
          label={"Confirm your email"}
          placeholder={"Enter your email again."}
          className={`mb-6`}
        />
        <PasswordInput
          label={"Create a password"}
          placeholder={"Enter a strong password here"}
        />

        <TextInput
          label={"What's should we call you?"}
          placeholder={"Enter a profile name."}
          className={`my-6`}
        />

        <div className=" w-full
         flex items-center justify-center my-8
        ">
        <button
        className="bg-green-400
        font-semibold px-10 p-3
        rounded-full
        "
        >SIGN UP</button>
        </div>
        <div className="w-full border border-solid
        border-gray-300"></div>

        <div className="my-6 text-lg
        font-semibold
        ">
          Already have an account?
        </div>

        <div className="
        w-full rounded-full py-4
        text-center font-bold 
        border border-solid
        border-gray-500
        text-gray-500 
        ">
        <Link to='/login'>
          LOG IN INSTEAD
          </Link>
        </div>
        
      </div>
    </div>
  );
}
