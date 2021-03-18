import React, { useState, useEffect } from 'react';
import './Ingredients.scss';
import axios from 'axios';

export const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const item = props.location.state,
    API = process.env.REACT_APP_API_KEY,
    id = props.location.state.item.id,
    ingredientList = [],
    instructions = [],
    url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false${API}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIngredients(res.data);
        console.log('data retreived');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ingredientList = ingredients.extendedIngredients.map((item) => {
    return <li>{item.originalString}</li>;
  });

  instructions = ingredients.analyzedInstructions[0].steps.map((item) => {
    return <li>{item.step}</li>;
  });

  return (
    <div>
      <div className='grid-container'>
        <div className='title'>
          <img roundedCircle src={item.image} alt={item.title} />
          <h1>{item.title}</h1>
          <hr />
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
