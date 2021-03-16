import React from 'react';
import './Ingredients.scss';
export const Ingredients = (props) => {
  const item = props.location.state.item,
    API = process.env.REACT_APP_API_KEY,
    id = props.location.state.item.id,
    url = `https://api.spoonacular.com/recipes/complexSearch?query=${id}${API}`;

  console.log(item);

  return (
    <div>
      <div className='grid-container'>
        <div className='title'>
          <h1>{item.title}</h1>
        </div>
        <div className='instructions'>
          <h2>Instructions</h2>
        </div>
        <div className='ingredients'>
          <h2>Ingredients</h2>
        </div>
      </div>
    </div>
  );
};
