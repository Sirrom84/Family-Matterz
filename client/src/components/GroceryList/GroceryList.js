import React from 'react';
import { GroceryListItem } from './GroceryListItem';
const data = [
  'carrots',
  'falafal',
  'onions',
  'Garlic',
  'sandwhich mean',
  'chicken thighs',
];
export const GroceryList = (props) => {
  const groceryItems = data.map((data, index) => {
    return <GroceryListItem key={index} data={data} onclick={props.selected} />;
  });
  return (
    <div>
      <h1>Grocery List</h1>
      <div>{groceryItems}</div>
    </div>
  );
};
