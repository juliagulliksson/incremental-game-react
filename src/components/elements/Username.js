import React from 'react';

export default function Username(props){
  return (
      <p>Welcome to Avocado Clicker, <span className="user">{ props.username }</span>!</p>
  )
}