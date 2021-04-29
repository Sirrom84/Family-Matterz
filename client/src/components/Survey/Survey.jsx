import React, { useState, useEffect } from 'react';

import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { ChosenRecipee } from './ChosenRecipee';
import { SurveyItem } from './SurveyItem';
import BottomNav from '../BottomNav/BottomNav';
import './Survey.scss';
import axios from 'axios';

export const Survey = () => {
  let [currentItem, setCurrentItem] = useState('');
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  // Brings in survey items from DB
  useEffect(() => {
    axios
      .get('http://localhost:9000/survey')
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log('Error fetching data', err);
      });
  }, []);

  // Handles user input
  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  // adds user input to list
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const surveyItem = {
      title: currentItem,
    };
    setList([...list, surveyItem]);
    setCurrentItem('');
    axios
      .post('http://localhost:9000/survey', surveyItem)
      .then(() => {
        console.log('New Item Added');
      })
      .catch((err) => {
        console.log('Item Not Added', err);
      });
  };
  // updates liked state and winner state of survey item
  const onClickHandler = (index) => {
    const liked = [...list];
    const updateItem = liked[index];
    Object.assign(updateItem, {
      isLiked: true,
      likes: updateItem.winner ? updateItem.likes : (updateItem.likes += 1),
      winner: updateItem.likes > 2 ? true : false,
    });
    setList(liked);
    const item = liked[index];
    axios.put(`http://localhost:9000/survey/${item._id}`, item).catch((err) => {
      console.log('Error Updating Survey', err);
    });
    handleOpen();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Checks if there is a winner
  const winChecker = () => {
    for (const item of list) {
      if (item.winner) return true;
    }
  };

  // resets survey items to empty
  const onResetHandler = () => {
    axios.delete('http://localhost:9000/survey').catch((err) => {
      console.log('Error in Survey Delete', err);
    });
    setList([]);
  };

  const winningItem = list.map((item, index) => {
    return (
      <ChosenRecipee
        key={index}
        item={item}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
    );
  });

  const surveyItems = list.map((item, index) => {
    return (
      <SurveyItem
        key={index}
        item={item}
        index={index}
        list={list}
        setList={setList}
        handleOpen={handleOpen}
        onClick={() => onClickHandler(index)}
      />
    );
  });

  return (
    <div className='survey-container'>
      <h3>Whats On the Menu For Today?</h3>
      <FiRefreshCw className='reset' onClick={onResetHandler} />
      {winChecker() ? <div className='survey-items'>{winningItem}</div> : null}
      <div className='survey-items'>{surveyItems}</div>
      <div className='feild-input'>
        <form onSubmit={onSubmitHandler}>
          <input
            type='text'
            placeholder='Whats Cooking?'
            value={currentItem}
            onChange={onChangeHandler}
          />
        </form>
        <FaRegArrowAltCircleUp className='submit' onClick={onSubmitHandler} />
      </div>
      <BottomNav />
    </div>
  );
};
