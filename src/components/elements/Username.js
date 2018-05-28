import React from 'react';

export default function Username(props){
  return (
    <div className="username">
      <p>Current player: <span class="user">{ props.username }</span></p>
    </div>
  )
}