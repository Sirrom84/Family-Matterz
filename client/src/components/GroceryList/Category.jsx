import { ContactSupportOutlined } from '@material-ui/icons';
import { CommonSeriesSettingsHoverStyle } from 'devextreme-react/range-selector';
import React from 'react';
import { GroceryListItem } from './GroceryListItem';

export const Category = (props) => {
  const items = props.data.items;
  console.log(items, 'items added');
  const listItems = items.map((item, index) => {
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
    <div>
      <h4>{props.data.name}</h4>
      <div>{listItems}</div>
    </div>
  );
};
