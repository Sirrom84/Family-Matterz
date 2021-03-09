import React from 'react';
import './GroceryListItem.css';
import classnames from 'classnames';

export const GroceryListItem = (props) => {
  const ButtonClass = classnames('button', {
    selected: props.selected,
  });

  return (
    <div className='list-item'>
      <button type='checkbox' onClick={props.onClick} />
      <p>{props.data}</p>
    </div>
  );
};
