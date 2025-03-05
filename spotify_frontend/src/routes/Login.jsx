import React from 'react'

import spotify_logo from '../assets/spotify_logo.svg';

export default function LoginComponent() {
  return (
    <div className='bg-white h-full w-full flex flex-col items-center '>
       <div className='border-b border-solid
        border-gray-200
        w-full flex justify-center
        '>
       <img src={spotify_logo} alt='spotify_clone' className='
          h-32 w-32
          ' />

        <div className='input fields'>

        </div>

       </div>
    </div>
  )
}
