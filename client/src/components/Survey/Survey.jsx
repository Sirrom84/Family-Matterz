import React, { useState, useEffect } from 'react';

import { FaArrowAltCircleDown } from 'react-icons/fa';
import { ChosenRecipee } from './ChosenRecipee';
import { SurveyItem } from './SurveyItem';
import './Survey.scss';
import axios from 'axios';

export const Survey = () => {
  // const [showWinner, setShowWinner] = useState(false);
  let [currentItem, setCurrentItem] = useState('');
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

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

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

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

  const onClickHandler = (index) => {
    const liked = [...list];
    const updateItem = liked[index];
    Object.assign(updateItem, {
      isLiked: true,
      likes: updateItem.winner ? updateItem.likes : updateItem.likes + 1,
      winner: updateItem.likes >= 2 ? true : false,
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

  const winChecker = () => {
    for (const item of list) {
      if (item.winner) return true;
    }
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
      <form className='feild-input' onSubmit={onSubmitHandler}>
        <input
          type='text'
          placeholder='Whats Cooking?'
          value={currentItem}
          onChange={onChangeHandler}
        />
        <FaArrowAltCircleDown
          className='submit-button'
          onClick={onSubmitHandler}
        />
      </form>
      {winChecker() ? <div className='survey-items'>{winningItem}</div> : null}
      <div className='survey-items'>{surveyItems}</div>
    </div>
  );
};
