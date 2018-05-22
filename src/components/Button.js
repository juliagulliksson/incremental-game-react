import React from 'react';

export default function Button(props){
  return (
    <button onClick={props.handleClick}
            className={'btn btn-primary ' + props.className}>{props.children}</button>
  )
}