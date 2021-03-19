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
    axios.get('http://localhost:9000/survey').then((res) => {
      setList(res.data);
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
    console.log(surveyItem);
    console.log(list);
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
    Object.assign(liked[index], {
      isLiked: true,
      likes: liked[index].likes + 1,
      winner: liked[index].likes >= 2 ? true : false,
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

  const surveyItems = list.map((item, index) => {
    if (item.winner) {
      return (
        <ChosenRecipee
          key={index}
          item={item}
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
      );
    }
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
      <div className='survey-items'>{surveyItems}</div>
    </div>
  );
};
