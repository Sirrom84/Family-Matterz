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
    let group = items.reduce((r, a) => {
      r[a.category] = [...(r[a.category] || []), a];
      return r;
    }, {});
    setItem(group);
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
    console.log('in the first axios');
    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/search?query=${input}${API}`
      )
      .then((res) => {
        console.log('in the second axios');
        const ID = res.data.results[0].id;
        return axios.get(
          `https://api.spoonacular.com/food/ingredients/${ID}/information?${API}`
        );
      })
      .then((res) => {
        const newItem = {
          title: input,
          checked: false,
          category: res.data.aisle,
        };

        const aisle = res.data.aisle;

        if (items[aisle]) {
          items[aisle] = [...items[aisle], newItem];
          console.log(items);
          setItem({ ...items });
        } else {
          const updatedItem = (items[res.data.aisle] = [newItem]);
          console.log(updatedItem);
          setItem({ ...items, updatedItem });
        }

        setInput('');
        console.log('in the third axios');
        axios.post('http://localhost:9000/groceries', newItem);
      })
      .catch((err) => {
        console.log(err, 'Error in chain');
      });
  };

  const onCheckHandler = (item, itemIndex) => {
    //   // console.log(item);
    //   // const checked = [...items];
    //   // console.log(checked[index].items);
    //   Object.assign(item, {
    //     checked: !item.checked,
    //   });

    // const category = (element) => element.name === item.category;
    // const findCategory = items.findIndex(category);

    // const newList = [...items];
    // const itemFind = newList[findCategory].items[0];
    // const newItem = [...itemFind];
    // const newCategory = [{ ...newList[findCategory], newItem }];
    // const itemToAdd = [...newList, newCategory];
    // setItem(itemToAdd);

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

  // const checkItemsLeft = (list) => {
  //   let count = 0;
  //   for (const item of list) {
  //     if (!item.checked) {
  //       count++;
  //     }
  //   }
  //   return count;
  // };

  const entries = Object.entries(items);
  const groceryItems = entries.map((data, index) => {
    return (
      <Category
        title={data[0]}
        body={data[1]}
        index={index}
        onToggle={onCheckHandler}
        onDelete={() => onDeleteHandler(data)}
      />
    );
  });

  return (
    <div className='groceryList'>
      <h1>Grocery List</h1>
      {/* <span>Items left: {checkItemsLeft(items)}</span> */}
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
