import React from 'react';
import { GroceryListItem } from './GroceryListItem';
import './Category.scss';
export const Category = (props) => {
  const listItems = props.body.map((item, index) => {
    return (
      <GroceryListItem
        item={item}
        key={index}
        onDelete={props.onDelete}
        onToggle={props.onToggle}
      />
    );
  });

  return (
    <div className='category'>
      <h4>{props.title}</h4>
      <div>{listItems}</div>
    </div>
  );
};
