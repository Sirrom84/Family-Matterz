import React from 'react';
import { FcOk } from 'react-icons/fc';

import './ChosenRecipee.scss';
export const ChosenRecipee = (props) => {
  return (
    <div className='winner'>
      <div>
        <h2>{props.item.title}</h2>
        <FcOk />
      </div>
      <p>
        {props.item.title} has {props.item.likes}/3 votes
      </p>
      <button>Recipe Book</button>
    </div>
  );
};
