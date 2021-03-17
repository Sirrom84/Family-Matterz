import React, { useState, useEffect } from 'react';
import './Ingredients.scss';
import axios from 'axios';

export const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const item = props.location.state.item,
    API = process.env.REACT_APP_API_KEY,
    id = props.location.state.item.id,
    url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false${API}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ingredientList = ingredients.extendedIngredients.map((item) => {
    return <li>{item.originalString}</li>;
  });

  console.log();

  const instructions = ingredients.analyzedInstructions[0].steps.map((item) => {
    return <li>{item.step}</li>;
  });
  return (
    <div>
      <div className='grid-container'>
        <div className='title'>
          <h1>{item.title}</h1>
          <img thumbnail='true' src={item.image} alt={item.title} />
        </div>
        <div className='instructions'>
          <h2>Instructions</h2>
          <ol>{instructions}</ol>
        </div>
        <div className='ingredients'>
          <h2>Ingredients</h2>
          <ul>{ingredientList}</ul>
        </div>
      </div>
    </div>
  );
};
