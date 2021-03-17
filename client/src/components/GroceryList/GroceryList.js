import React, { useState } from 'react';
import { GroceryListItem } from './GroceryListItem';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

import './GroceryList.scss';

export const GroceryList = (props) => {
  const [input, setInput] = useState('');
  const [items, setItem] = useState([
    { title: 'carrots', checked: false },
    { title: 'onions', checked: false },
    { title: 'cereal', checked: false },
  ]);

  const onSubmitHandler = () => {
    setItem([...items, { title: input, checked: false }]);
    setInput('');
  };

  const onCheckHandler = (index) => {
    const checked = [...items];
    Object.assign(checked[index], {
      checked: !checked[index].checked,
    });
    setItem(checked);
  };

  const checkItemsLeft = (list) => {
    let count = 0;
    for (const item of list) {
      if (!item.checked) {
        count++;
      }
    }
    return count;
  };

  const groceryItems = items.map((data, index) => {
    return (
      <GroceryListItem
        key={index}
        data={data}
        onClick={() => onCheckHandler(index)}
      />
    );
  });

  return (
    <div className='groceryList'>
      <h1>Grocery List</h1>
      <span>Items left: {checkItemsLeft(items)}</span>
      <div className='list'>{groceryItems}</div>
      <div className='input'>
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Add an Item'
        />
        <FaRegArrowAltCircleUp className='submit' onClick={onSubmitHandler} />
      </div>
    </div>
  );
};
