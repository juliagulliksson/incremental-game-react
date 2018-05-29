import React from 'react';

export default function InputField({ handleSubmit, placeholder }) {

  return (
    <input  type = "text" 
            placeholder = { placeholder } 
            onKeyDown = { handleSubmit } />
  )
}