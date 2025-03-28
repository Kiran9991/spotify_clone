import React from 'react'

export default function TextInput({ label, placeholder, className, value, setValue }) {
  return (
    <div className={`flex flex-col
    space-y-2 w-full ${className}`}>
    <label
    className='font-semibold'
    >{label}</label>
    <input type='text'
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
