import React from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { Badge, Button } from '@material-ui/core';

export const SurveyItem = (props) => {
  return (
    <div>
      <li>
        <div className='item'>
          {props.item.title}
          <Badge badgeContent={props.item.likes}>
            {props.list[props.index].isLiked ? (
              <FcLike onClick={props.onClick} />
            ) : (
              <FcLikePlaceholder onClick={props.onClick} />
            )}
          </Badge>
        </div>
        <hr />
      </li>
    </div>
  );
};
