import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

import spotify_logo from "../assets/spotify_logo.svg";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { makeUnauthenticatedPostRequest } from "../utils/serverHelpers";

export default function SignupComponent() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ ,setCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const signup = async () => {
    if(email !== confirmEmail) {
      alert(
        "Email and confirm email fields must match. Please check again"
      )
    }
    const data = {
      email, username, password, firstName, lastName
    }
    const response = await makeUnauthenticatedPostRequest('/auth/register', data);
    if(response && !response.err) {
      console.log(response, 'success');
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: '/', expires: date });
      alert('succed');
      navigate('/home');
    }else {
      console.log('failed');
      alert('failed');
    }
  }

  return (
    <div className="bg-white h-full w-full flex flex-col items-center">
      <div className="border-b border-solid border-gray-300 w-full flex justify-center">
        <img src={spotify_logo} alt="spotify_clone" className="h-32 w-32" />
      </div>

      <div className="inputRegion w-1/3 py-10 flex flex-col items-center justify-center">
        <div className="font-bold mb-6 text-2xl">Sign up for free to start listening.</div>
        
        <TextInput
          label="What's your email"
          placeholder="Enter your email."
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        
        <TextInput
          label="Confirm your email"
          placeholder="Enter your email again."
          className="mb-6"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />

        <TextInput
          label="Username"
          placeholder="Enter your username"
          className="mb-6"
          value={username}
          setValue={setUsername}
        />

        <PasswordInput
          label="Create a password"
          placeholder="Enter a strong password here"
          value={password}
          setValue={setPassword}
        />

        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name"
            placeholder="Enter your First name."
            className="my-6"
            value={firstName}
            setValue={setFirstName}
          />

          <TextInput
            label="Last Name"
            placeholder="Enter your Last name."
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        </div>

        <div className="w-full flex items-center 
        justify-center my-8">
          <button className="bg-green-400 
          font-semibold 
          px-10 p-3 rounded-full"
          onClick={() => signup()}
          >
            SIGN UP
          </button>
        </div>

        <div className="w-full border border-solid border-gray-300"></div>

        <div className="my-6 text-lg font-semibold">Already have an account?</div>

        <div className="w-full rounded-full
         py-4 text-center font-bold border
          border-solid border-gray-500
           text-gray-500">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
}
