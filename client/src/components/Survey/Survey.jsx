import React, { useState } from 'react';

import { FaArrowAltCircleDown } from 'react-icons/fa';
import { ChosenRecipee } from './ChosenRecipee';
import { SurveyItem } from './SurveyItem';
import './Survey.scss';

export const Survey = () => {
  // const [showWinner, setShowWinner] = useState(false);
  let [currentItem, setCurrentItem] = useState('');
  const [list, setList] = useState([
    { title: 'Pasta', isLiked: false, likes: 0, winner: false },
    { title: 'steak and Fries', isLiked: false, likes: 0, winner: false },
    { title: 'Lasagna', isLiked: false, likes: 0, winner: false },
  ]);
  const [open, setOpen] = useState(false);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const onSubmitHandler = () => {
    const newItem = [...list, { title: currentItem, isLiked: false, likes: 0 }];
    setList(newItem);
    setCurrentItem('');
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
          item={item}
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
      );
    }
    return (
      <SurveyItem
        item={item}
        index={index}
        list={list}
        setList={setList}
        handleOpen={handleOpen}
      />
    );
  });

  return (
    <div className='survey-container'>
      <h3>Whats On the Menu For Today?</h3>
      <form>
        <div className='feild-input'>
          <input
            type='text'
            placeholder='Whats Cooking?'
            value={currentItem.value}
            onChange={onChangeHandler}
          />
          <FaArrowAltCircleDown
            className='submit-button'
            onClick={onSubmitHandler}
          />
        </div>
      </form>
      <div className='survey-items'>{surveyItems}</div>
    </div>
  );
};
