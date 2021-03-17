import React from 'react';
import './GroceryListItem.scss';
import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import classNames from 'classnames';
export const GroceryListItem = (props) => {
  let CheckedClass = 'item';
  if (props.data.checked) {
    CheckedClass += ' checked';
  }

  return (
    <div onClick={props.onClick} className='list-item'>
      {props.data.checked ? (
        <BsCheckCircle className='button buttonCheck' />
      ) : (
        <BsCircle className='button' />
      )}
      <p className={CheckedClass}>{props.data.title}</p>
    </div>
  );
};
