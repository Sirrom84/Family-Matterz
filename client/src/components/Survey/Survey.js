import React, { useState } from 'react';

import { FaArrowAltCircleDown } from 'react-icons/fa';
import { ChosenRecipee } from './ChosenRecipee';
import { SurveyItem } from './SurveyItem';
import './Survey.scss';

export const Survey = () => {
  // const [showWinner, setShowWinner] = useState(false);
  let [currentItem, setCurrentItem] = useState('');
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([
    { title: 'Pasta', isLiked: false, likes: 0, winner: false },
    { title: 'steak and Fries', isLiked: false, likes: 0, winner: false },
    { title: 'Lasagna', isLiked: false, likes: 0, winner: false },
  ]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const onSubmitHandler = (e) => {
    const newItem = [...list, { title: currentItem, isLiked: false, likes: 0 }];
    setList(newItem);
    setCurrentItem('');
  };

  const onClickHandler = (index) => {
    const liked = [...list];
    Object.assign(liked[index], {
      isLiked: true,
      likes: liked[index].likes + 1,
      winner: liked[index].likes >= 2 ? true : false,
    });
    setList(liked);

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
        onClick={() => onClickHandler(index)}
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
