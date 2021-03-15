import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RecipeItem } from './RecipeItem';
import './Recipes.scss';
// Need to figure out how to collect props recipe title

export const Recipes = (props) => {
  console.log(props.location);
  const [recipe, setRecipe] = useState([]);
  const API = process.env.REACT_APP_API_KEY;
  const item = 'pasta';
  console.log();
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${item}&includeIngredients${API}`
      )
      .then((res) => {
        setRecipe(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const showInfoHandler = () => {};
  // useEffect(() => {
  // }, []);

  const recipes = recipe.map((item, index) => {
    return <RecipeItem item={item} index={index} onClick={showInfoHandler} />;
  });

  return (
    <div>
      <h3>Recipe Book</h3>
      <div className='recipe-container'>{recipes}</div>;
    </div>
  );
};
