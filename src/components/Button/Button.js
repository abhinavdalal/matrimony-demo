import React from 'react'
import './Button.css'

export default (props) => (
  <button { ...props } className={ `Button ${props.className}`}>
    { props.children }
  </button>
);
