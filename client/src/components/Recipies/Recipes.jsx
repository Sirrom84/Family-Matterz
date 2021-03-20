import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RecipeItem } from './RecipeItem';

import './Recipes.scss';

export const Recipes = (props) => {
  const [recipe, setRecipe] = useState([]),
    API = process.env.REACT_APP_API_KEY,
    dish = props.location.state.title,
    apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${dish}${API}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setRecipe(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const recipes = recipe.map((item, index) => {
    return (
      <RecipeItem
        key={index}
        item={item}
        index={index}
        dish={dish}
        location={props.location}
      />
    );
  });

  return (
    <div className='recipes'>
      <h3>Recipe Book</h3>
      <div className='recipe-container'>{recipes}</div>
    </div>
  );
};
