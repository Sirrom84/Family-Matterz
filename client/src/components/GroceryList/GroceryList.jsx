import React, { useState, useEffect } from 'react';
import { Category } from './Category';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import './GroceryList.scss';
import axios from 'axios';
import BottomNav from '../BottomNav/BottomNav';

export const GroceryList = () => {
  const [input, setInput] = useState('');
  const [items, setItem] = useState([]);

  // Re formats DB data to organize items by category
  const formatCategories = (items) => {
    let group = items.reduce((r, a) => {
      r[a.category] = [...(r[a.category] || []), a];
      return r;
    }, {});
    setItem(group);
  };

  // Fetches Grocery List items from DB
  useEffect(() => {
    axios
      .get('http://localhost:9000/groceries')
      .then((res) => {
        formatCategories(res.data);
      })
      .catch((err) => {
        console.log('Error in Data fetch', err);
      });
  }, []);

  // Takes in item input and assigns it a food category based on Spoontacular API
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const API = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/search?query=${input}${API}`
      )
      .then((res) => {
        const ID = res.data.results[0].id;
        return axios.get(
          `https://api.spoonacular.com/food/ingredients/${ID}/information?${API}`
        );
      })
      .then((res) => {
        const split = res.data.aisle.split(';');
        const newItem = {
          title: input,
          checked: false,
          category: split[0],
        };

        const aisle = split[0];

        if (items[aisle]) {
          items[aisle] = [...items[aisle], newItem];
          setItem({ ...items });
        } else {
          items[aisle] = [newItem];
          setItem({ ...items });
        }

        setInput('');
        axios.post('http://localhost:9000/groceries', newItem);
      })
      .catch((err) => {
        console.log(err, 'Error in chain');
      });
  };

  // Handles checked off items
  const onCheckHandler = (item) => {
    Object.assign(item, {
      checked: !item.checked,
    });
    setItem({ ...items });

    axios
      .put(`http://localhost:9000/groceries/${item._id}`, item)
      .catch((err) => {
        console.log('Error Updating Item', err);
      });
  };

  // handles items being deleted
  const onDeleteHandler = (item) => {
    const filteredItems = items[item.category].filter(
      (element) => element._id !== item._id
    );
    if (items[item.category].length > 1) {
      items[item.category] = filteredItems;
    } else {
      items[item.category] = [];
    }

    setItem({ ...items });
    axios.delete(`http://localhost:9000/groceries/${item._id}`).catch((err) => {
      console.log('Error deleting Item', err);
    });
  };

  // Handles display of items left in cart
  const checkItemsLeft = (list) => {
    let count = 0;
    const itemLeft = Object.values(items);

    for (const item of itemLeft) {
      for (const element of item) {
        if (!element.checked) {
          count++;
        }
      }
    }
    return count;
  };

  // Creates list of Categories based on items in DB
  const entries = Object.entries(items);
  const groceryItems = entries.map((data, index) => {
    return (
      <Category
        key={index}
        title={data[0]}
        body={data[1]}
        index={index}
        onToggle={onCheckHandler}
        onDelete={onDeleteHandler}
      />
    );
  });

  return (
    <div className='groceryList'>
      <h1>Grocery List</h1>
      <span>Items left: {checkItemsLeft(items)}</span>
      <div className='list'>{groceryItems}</div>
      <form className='input' onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Add an Item'
          value={input}
        />
        <FaRegArrowAltCircleUp
          value={input}
          className='submit'
          onClick={onSubmitHandler}
        />
      </form>
      <BottomNav />
    </div>
  );
};
