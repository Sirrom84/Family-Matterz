import React, { useState } from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { Badge } from '@material-ui/core';
import { ChosenRecipee } from './ChosenRecipee';
import './Survey.scss';

export const Survey = () => {
  // const [showWinner, setShowWinner] = useState(false);
  let [currentItem, setCurrentItem] = useState('');
  const [list, setList] = useState([
    { title: 'Pasta', isLiked: false, likes: 0, winner: false },
    { title: 'steak and Fries', isLiked: false, likes: 0, winner: false },
    { title: 'Lasagna', isLiked: false, likes: 0, winner: false },
  ]);
  const [open, setOpen] = React.useState(false);

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
      <li key={index}>
        <div className='item'>
          {item.title}
          <Badge badgeContent={item.likes}>
            {list[index].isLiked ? (
              <FcLike onClick={() => onClickHandler(index)} />
            ) : (
              <FcLikePlaceholder onClick={() => onClickHandler(index)} />
            )}
          </Badge>
        </div>
        <hr />
      </li>
    );
  });

  return (
    <div className='survey-container'>
      <h3>Whats On the Menu For Today?</h3>
      <form>
        <div className='feild-input'>
          <input
            type='text'
            placeholder='Add a Dish'
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
