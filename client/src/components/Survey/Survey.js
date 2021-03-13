import React, { useState } from 'react';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import { FcPlus } from 'react-icons/fc';
import { Badge } from '@material-ui/core';
import './Survey.scss';

export const Survey = () => {
  // const [showWinner, setShowWinner] = useState(false);
  let [currentItem, setCurrentItem] = useState('');
  const [list, setList] = useState([
    { title: 'fish', isLiked: false, likes: 0 },
    { title: 'steak and Fries', isLiked: false, likes: 0 },
  ]);

  const onClickHandler = (index) => {
    const liked = [...list];
    Object.assign(liked[index], {
      isLiked: !liked[index].isLiked,
      likes: liked[index].likes + 1,
    });
    setList(liked);
  };

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const onSubmitHandler = () => {
    const newItem = [...list, { title: currentItem, isLiked: false, likes: 0 }];
    setList(newItem);
    setCurrentItem('');
  };

  const surveyItems = list.map((item, index) => {
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
          <FcPlus onClick={onSubmitHandler} />
        </div>
      </form>
      <div className='survey-items'>{surveyItems}</div>
    </div>
  );
};
