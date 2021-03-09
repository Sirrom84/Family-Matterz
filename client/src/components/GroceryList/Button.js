import React from 'react';
import '/Button.css';
import classnames from 'classnames';
export const Button = (props) => {
  const buttonClass = classnames('button', {
    'button-selected': props.selected,
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
