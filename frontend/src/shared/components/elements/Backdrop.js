import React from 'react';
import ReactDOM from 'react-dom';
import './Backdrop.css';

export const Backdrop = (props) => {
  const backdropRoot = document.getElementById('backdrop-root');

  return backdropRoot
    ? ReactDOM.createPortal(
        <div className='backdrop' onClick={props.onClick}></div>,
        backdropRoot
      )
    : null;
};
