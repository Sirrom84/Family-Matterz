import React from 'react';
import './GroceryListItem.scss';
import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

export const GroceryListItem = (props) => {
  let CheckedClass = 'item';
  if (props.data.checked) {
    CheckedClass += ' checked';
  }

  return (
    <div className='list-container'>
      <div onClick={props.onToggle} className='list-item'>
        {props.data.checked ? (
          <BsCheckCircle className='button buttonCheck' />
        ) : (
          <BsCircle className='button' />
        )}
        <p className={CheckedClass}>{props.data.title}</p>
      </div>
      <BsTrash className='delete' onClick={props.onDelete} />
    </div>
  );
};
