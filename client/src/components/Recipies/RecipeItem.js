import React from 'react';

export const RecipeItem = (props) => {
  return (
    <div key={props.index} onClick={props.onClick} className='recipe-item'>
      <img src={props.item.image} thumbnail width='125px' height='auto' />
      <h4>{props.item.title}</h4>
      <button>Show info</button>
    </div>
  );
};
