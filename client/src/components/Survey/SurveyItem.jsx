import React from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { Badge, Button } from '@material-ui/core';

export const SurveyItem = (props) => {
  const onClickHandler = (index) => {
    const liked = [...props.list];
    Object.assign(liked[index], {
      isLiked: true,
      likes: liked[index].likes + 1,
      winner: liked[index].likes >= 2 ? true : false,
    });
    props.setList(liked);

    props.handleOpen();
  };

  return (
    <div>
      <li key={props.index}>
        <div className='item'>
          {props.item.title}
          <Badge badgeContent={props.item.likes}>
            {props.list[props.index].isLiked ? (
              <FcLike onClick={() => onClickHandler(props.index)} />
            ) : (
              <FcLikePlaceholder onClick={() => onClickHandler(props.index)} />
            )}
          </Badge>
        </div>
        <hr />
      </li>
    </div>
  );
};
