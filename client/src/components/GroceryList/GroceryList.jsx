import React, { useState, useEffect } from 'react';
import { Category } from './Category';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import './GroceryList.scss';
import axios from 'axios';
import BottomNav from '../BottomNav/BottomNav';

export const GroceryList = () => {
  const [input, setInput] = useState('');
  const [items, setItem] = useState([]);

  const formatCategories = (items) => {
    const aisleArr = [];
    for (const item of items) {
      aisleArr.push({ name: item.category, items: [] });
    }

    for (const category of aisleArr) {
      const filtered = items.filter((item) => {
        return item.category === category.name;
      });
      category.items.push(filtered);
    }
    setItem(aisleArr);
    console.log('Loaded');
  };

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const API = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/search?query=${input}${API}s`
      )
      .then((res) => {
        const ID = res.data.results[0].id;
        return axios.get(
          `https://api.spoonacular.com/food/ingredients/${ID}/information?${API}`
        );
      })
      .then((res) => {
        const newItem = {
          title: res.data.name,
          checked: false,
          category: res.data.aisle,
        };
        setItem([...items, newItem]);
        setInput('');
        return axios.post('http://localhost:9000/groceries', newItem);
      })
      .then((res) => {
        console.log('Item Added', res);
      })
      .catch((err) => {
        console.log(err, 'Error in chain');
      });
  };

  const onCheckHandler = (index) => {
    const checked = [...items];
    Object.assign(checked[index], {
      checked: !checked[index].checked,
    });
    setItem(checked);
    const item = items[index];
    axios
      .put(`http://localhost:9000/groceries/${item._id}`, item)
      .catch((err) => {
        console.log('Error Updating Item', err);
      });
  };

  const onDeleteHandler = (item) => {
    const filteredItems = items.filter((element) => element._id !== item._id);
    setItem(filteredItems);
    axios.delete(`http://localhost:9000/groceries/${item._id}`).catch((err) => {
      console.log('Error deleting Item', err);
    });
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
      <Category
        data={data}
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
