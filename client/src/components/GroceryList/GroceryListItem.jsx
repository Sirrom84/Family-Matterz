import React from 'react';
import './GroceryListItem.scss';
import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

export const GroceryListItem = (props) => {
  const item = props.item;
  let CheckedClass = 'item';
  if (item.checked) {
    CheckedClass += ' checked';
  }

  return (
    <div className='list-container'>
      <div onClick={() => props.onToggle(item)} className='list-item'>
        {item.checked ? (
          <BsCheckCircle className='button buttonCheck' />
        ) : (
          <BsCircle className='button' />
        )}
        <p className={CheckedClass}>{item.title}</p>
      </div>
      <BsTrash className='delete' onClick={() => props.onDelete(item)} />
    </div>
  );
};
