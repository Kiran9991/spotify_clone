import React from 'react'

export default function PasswordInput({ label, placeholder, value, setValue }) {
  return (
    <div className='flex flex-col
    space-y-2 w-full
    '>
    <label
    className='font-semibold'
    >{label}</label>
    <input type='password'
    className='p-3 border border-gray-400 
    border-solid rounded placeholder-gray-500
    '
    placeholder={placeholder}
    id={label}
    value={value}
    onChange={(e) => {
      setValue(e.target.value);
    }}
    />
    </div>
    
  )
}
