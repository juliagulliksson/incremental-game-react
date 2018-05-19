import React from 'react';

export default function InputField({handleSubmit, value, placeholder}) {

  return (
    <input  type="text" 
            placeholder={placeholder} 
            onSubmit={handleSubmit} 
            value={value} />
  )
}